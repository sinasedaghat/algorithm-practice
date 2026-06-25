// 3ms
export function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  return Array.from({ length: n * 2 }, (_, i) => {
    if (i < n) return (i = nums[i]);
    else return (i = nums[i - n]);
  });
}

// 2ms
export function getConcatenationV2(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = Array.from({ length: n * 2 });

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }

  return ans;
}

// 0ms
export function getConcatenationV3(nums: number[]): number[] {
  const ans: number[] = Array(nums.length * 2);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + nums.length] = nums[i];
  }

  return ans;
}

// 0ms
export function getConcatenationV4(nums: number[]): number[] {
  return nums.reduce(
    (ans, num, i) => {
      ans[i] = num;
      ans[i + nums.length] = num;
      return ans;
    },
    Array(nums.length * 2),
  );
}
