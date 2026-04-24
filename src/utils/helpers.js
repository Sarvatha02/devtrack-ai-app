/**
 * Format large numbers into compact strings (e.g. 10000 -> "10,000+")
 */
export const formatNumber = (num, suffix = '+') => {
  return num.toLocaleString() + suffix;
};

/**
 * Clamp a value between min and max
 */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
