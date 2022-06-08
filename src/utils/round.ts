export const getRoundedAbs = (num: number, radix = 1) =>
  Math.abs(Math.round(num * Math.pow(10, radix)) / Math.pow(10, radix));
