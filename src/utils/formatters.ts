export function formatNumber(num: number, decimals: number = 2) {
  return num.toLocaleString(undefined, {
    maximumFractionDigits: decimals
  });
}

export function formatDistance(au: number) {
  return `${formatNumber(au)} AU`;
}

export function formatPeriod(days: number) {
  if (days === 0) return 'N/A';
  return `${formatNumber(days)} days`;
}