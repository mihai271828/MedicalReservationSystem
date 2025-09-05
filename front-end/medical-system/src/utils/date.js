export const isoDate = (d) => d.toISOString().split("T")[0];

export const inNextNDays = (dateStr, n) => {
  const d = new Date(dateStr);
  const today = new Date();
  const limit = new Date();
  limit.setDate(today.getDate() + n);
  // normalize to date only
  d.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  limit.setHours(0, 0, 0, 0);
  return d >= today && d <= limit;
};

export const upcoming = (patients, n = 3) =>
  patients.filter((p) => inNextNDays(p.reservationDate, n));
