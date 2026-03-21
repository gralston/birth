/** Format a number as a dollar amount (e.g., 21.5 → "$21.50", 30 → "$30") */
export function formatFee(amount: number): string {
  return `$${amount % 1 === 0 ? amount : amount.toFixed(2)}`;
}
