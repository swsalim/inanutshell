export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
