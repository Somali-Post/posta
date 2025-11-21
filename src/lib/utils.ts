export function countryCodeToFlag(isoCode: string): string {
  if (!isoCode || isoCode.length !== 2) return '';
  return String.fromCodePoint(
    ...isoCode
      .toUpperCase()
      .split('')
      .map((char) => 0x1f1e6 + char.charCodeAt(0) - 'A'.charCodeAt(0))
  );
}
