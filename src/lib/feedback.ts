const REPO = "https://github.com/gralston/birth";

export function getFeedbackUrl(stateName?: string): string {
  const title = stateName
    ? `Data issue: ${stateName}`
    : "Data issue";
  const body = stateName
    ? `**State:** ${stateName}\n\n**What's wrong:**\n\n**What it should be (with source):**\n`
    : `**What's wrong:**\n\n**What it should be (with source):**\n`;
  return `${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}
