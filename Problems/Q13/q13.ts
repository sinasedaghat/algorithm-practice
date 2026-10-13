export const romanToInt = (s: string): number => {
  const romanNumerals = new Map<string, number>(
    Object.entries({
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }),
  );

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!romanNumerals.has(s[i])) {
      result = 0
      break
    };

    const num: number = romanNumerals.get(s[i])!;
    const nextNum: number = romanNumerals.get(s[i + 1]) ?? 0;

    if (num < nextNum) {
      result += nextNum - num;
      i++;
      continue;
    }

    result += num
  }

  return result;
};
