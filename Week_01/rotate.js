var rotate = function(nums, k) {
  const n = nums.length
  if ((k %= n) === 0) return
  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)
};
const reverse = (nums, l, r, t) => {
  while (l < r) {
      t = nums[l]
      nums[l++] = nums[r]
      nums[r--] = t 
  }
}
