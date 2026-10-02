/** The sum of a list of numbers. */
export function sum(values) {
  let total = 0;
  for (const value of values) total += value;
  return total;
}

/** The smallest value in a list of numbers. */
export function min(values) {
  return Math.min(...values);
}
