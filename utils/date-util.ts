export function timestampLabel(date: Date = new Date()): string {
  return date.toISOString().replace(/[:.]/g, '-');
}
