import { track } from "@vercel/analytics";

/**
 * Track custom analytics events. Uses Vercel Analytics track() —
 * events are recorded on Pro/Enterprise plans and silently ignored on free.
 */

export function trackWizardStep(step: string, state?: string) {
  track("wizard_step", { step, state: state ?? "" });
}

export function trackWizardComplete(state: string, reason: string, hasId: boolean) {
  track("wizard_complete", { state, reason, hasId: String(hasId) });
}

export function trackQuickLookup(state: string) {
  track("quick_lookup", { state });
}

export function trackMethodClick(method: string, state: string) {
  track("method_click", { method, state });
}

export function trackExternalLink(label: string, url: string) {
  track("external_link", { label, url });
}

export function trackCrossSiteClick(destination: string) {
  track("cross_site_click", { destination });
}

export function trackFeeWaiverView(state: string) {
  track("fee_waiver_view", { state });
}

export function trackLanguageSwitch(from: string, to: string) {
  track("language_switch", { from, to });
}
