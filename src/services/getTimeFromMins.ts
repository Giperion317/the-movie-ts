export const getTimeFromMins = (mins: number): string => {
  const hours = Math.floor(mins / 60).toString().padStart(2, '0');
  const minutes = (mins % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};