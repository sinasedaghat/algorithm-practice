export const twoSum = (nums: number[], target: number): number[] => {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const newTarget = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === newTarget) {
        result[0] = i;
        result[1] = j;
        break;
      }
    }
  }

  return result;
};


export const newTwoSum = (nums: number[], target: number): number[] => {
  const data = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if(data.has(target - nums[i])) {
      return [data.get(target - nums[i])!, i]
    }

    data.set(nums[i], i)
  }

  return []
}