/** The sum of a list of numbers. */
export function sum(values) {
  let total = 0;
  for (const value of values) total += value;
  return total;
}

/** The arithmetic mean of a list of numbers. */
export function mean(values) {
  return sum(values) / values.length;
}
