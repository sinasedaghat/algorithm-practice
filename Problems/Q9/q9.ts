export const isPalindrome = (x: number): boolean => {
  const nums = x.toString().split("");
  const len = nums.length

  for (let i = 0; i < Math.floor(len / 2); i++) {
    console.log("i >>>", i);
    console.log(`nums[${i}] >>>`, nums[i]);
    console.log(`nums[${len - i-1}] >>>`, nums[len - i-1]);
    if (nums[i] === nums[len - i-1]) continue
    else return false
  }
  return true
}
