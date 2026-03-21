/**
 * Verify all URLs in state data files are reachable.
 * Run with: npx tsx scripts/check-links.ts
 */

import { getAvailableStates, getStateData } from "../src/data/states";

interface LinkCheck {
  state: string;
  field: string;
  url: string;
  status: number | string;
  ok: boolean;
}

async function checkUrl(url: string): Promise<{ status: number | string; ok: boolean }> {
  try {
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
      headers: {
        "User-Agent": "Mozilla/5.0 (birth-cert-navigator link checker)",
      },
    });
    // Some servers reject HEAD, retry with GET
    if (res.status === 405 || res.status === 403) {
      const res2 = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: AbortSignal.timeout(10000),
        headers: {
          "User-Agent": "Mozilla/5.0 (birth-cert-navigator link checker)",
        },
      });
      return { status: res2.status, ok: res2.ok };
    }
    return { status: res.status, ok: res.ok };
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return { status: msg, ok: false };
  }
}

async function main() {
  const states = getAvailableStates();
  const results: LinkCheck[] = [];

  for (const { code, name } of states) {
    const data = getStateData(code);
    if (!data) continue;

    const urls: { field: string; url: string }[] = [];

    urls.push({ field: "office.website", url: data.office.website });

    if (data.requestMethods.online) {
      urls.push({ field: "online.url", url: data.requestMethods.online.url });
    }
    if (data.applicationFormUrl) {
      urls.push({ field: "applicationFormUrl", url: data.applicationFormUrl });
    }

    for (const { field, url } of urls) {
      process.stdout.write(`  ${code} ${field} ... `);
      const result = await checkUrl(url);
      results.push({ state: name, field, url, ...result });
      console.log(result.ok ? `✓ ${result.status}` : `✗ ${result.status}`);
    }
  }

  console.log("\n--- Summary ---\n");

  const broken = results.filter((r) => !r.ok);
  if (broken.length === 0) {
    console.log("All links OK!");
  } else {
    console.log(`${broken.length} failed link(s):\n`);
    for (const r of broken) {
      console.log(`  ${r.state} | ${r.field}`);
      console.log(`    ${r.url}`);
      console.log(`    Status: ${r.status}`);
      if (String(r.status).includes("fetch failed")) {
        console.log(`    Note: May be WAF/bot blocking — verify manually in a browser`);
      }
      console.log();
    }
  }

  // Also print verification status
  console.log("--- Verification Status ---\n");
  for (const { code, name } of states) {
    const data = getStateData(code);
    if (!data) continue;
    const status = data.lastVerified === "unverified" ? "⚠ UNVERIFIED" : `✓ ${data.lastVerified}`;
    console.log(`  ${code} ${name}: ${status}`);
  }
}

main();
