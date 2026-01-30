export function normalizeTrackingId(input: string): string {
  return (input || '').replace(/[^a-z0-9]/gi, '').toUpperCase();
}

export function isS10Format(id: string): boolean {
  // LL + 9 digits + CC (structural)
  return /^[A-Z]{2}\d{9}[A-Z]{2}$/.test(id);
}

export function computeS10CheckDigit(eightDigits: string): number | null {
  if (!/^\d{8}$/.test(eightDigits)) return null;

  const weights = [8, 6, 4, 2, 3, 5, 9, 7];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += Number(eightDigits[i]) * weights[i];
  }

  let cd = 11 - (sum % 11);
  if (cd === 10) cd = 0;
  if (cd === 11) cd = 5;

  return cd;
}

export function isValidS10(id: string): boolean {
  if (!isS10Format(id)) return false;

  // LL + [8-digit serial] + [check digit] + CC
  const digits9 = id.slice(2, 11);
  const serial8 = digits9.slice(0, 8);
  const checkDigit = digits9.slice(8, 9);

  const computed = computeS10CheckDigit(serial8);
  if (computed === null) return false;

  return String(computed) === checkDigit;
}
