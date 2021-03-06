// 将边界进行处理 
var numDecodings = function(s) {
  // 异常处理
  if(s[0] == '0') return 0
  const len = s.length, dp= [1,1, ...new Array(len - 1).fill(0)];
  // DP方程
  for(let i = 2; i <=len; i++){
      let lastOne = s.slice(i - 1, i), lastTwo = s.slice(i - 2, i)

      if(lastOne > 0 && lastOne < 10) dp[i] += dp[i - 1]

      if(lastTwo >= 10 && lastTwo <= 26) dp[i] += dp[i - 2]
  }
  return dp[len]
};