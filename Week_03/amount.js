// 抵消(栈方法降维)
// 相同的加1, 不相同的减1, 因为是大于一半, 所以最后肯定剩下大于一半的那个
var majorityElement = function(nums) {
  let x = 0
  let m = 0
  for(let n of nums){
    if(m === 0) x = n
    m += x === n ? 1 : -1
  }
  return x
};
