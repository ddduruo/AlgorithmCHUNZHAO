//利用动态规划降低时间复杂度
//如果位置的值是0, dp[i][j] = 0
//如果位置的值是1 do[i][j] = min(dp(i−1,j),dp(i−1,j−1),dp(i,j−1))+1
//由其上方、左方和左上方的三个相邻位置的 


var maximalSquare = function (matrix) {
  let maxSize = 0;
  let dp = new Array(matrix.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(matrix[i].length).fill(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        if (i == 0 || j === 0) dp[i][j] = 1;
        else
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        maxSize = Math.max(maxSize, dp[i][j]);
      }
    }
  }
  return maxSize ** 2;
};