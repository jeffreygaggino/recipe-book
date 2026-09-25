export function formatCookTime(totalMins: number): string {
  if (totalMins < 60) return `${totalMins} min`;

  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;

  return mins === 0 ? `${hrs} hr` : `${hrs} hr ${mins} min`;
}
