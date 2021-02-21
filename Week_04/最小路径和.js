//动态规划 创建二维数组dp 与原始网格的大小相同，dp[i][j]表示从左上角出发到(i,j)位置的最小路径和。显然dp[0][0] = grid[0][0];
// 其余元素就是 通过状态方程计算元素值
// 当i > 0 且j = 0; dp[i][0] = dp[i - 1][0] + grid[i][0]
// 当i = 0 j> 0; dp[0][j] = dp[0][j-1] + grid[i][j]
// dp[i][j] = min(dp[i-1])
var minPathSum = function(grid) {
  // grid.length 对应网格的行数； 小数组的长度对应网格的列数
  let row = grid.length;
  let column = grid[0].length;
  var dp = new Array(row);
  for(var i = 0;i<row;i++){
      dp[i] = new Array(column).fill(0);
  }
  dp[0][0] = grid[0][0];
  for(let i = 0 ; i < row; i++){
      for(let j = 0; j < column; j++){
          if(i > 0 && j == 0){
              dp[i][j] = dp[i - 1][j] + grid[i][j]
          }else if(i == 0 && j > 0){
              dp[i][j] = dp[i][j-1] + grid[i][j]
          }else if(i > 0 && j > 0){
              dp[i][j] = Math.min(dp[i][j-1], dp[i -1][j]) + grid[i][j]
          }
      }
  }
  return dp[row -1][column -1]
};