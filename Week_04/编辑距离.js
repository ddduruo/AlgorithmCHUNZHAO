var minDistance = function(word1, word2) {
  /**
  * if (word1.charCodeAt(i - 1) !== word2.charCodeAt(j - 1)) dp[i - 1][j - 1]++
  * dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] )
  * dp[i - 1][j] + 1 : word1 插入一个字符
  * dp[i][j - 1] + 1 : word2 插入一个字符
  * dp[i - 1][j - 1] : 当这个位置两个word的字符不一样时 需要替换一个字符 否则保持
  */

 // row 与 col 都加一 便于后续构建状态转移方程
 const row = word1.length, col = word2.length,
       dp = new Array(row + 1).fill().map(() => new Array(col + 1).fill(0))

 // 边界处理
 for (let i = 0; i <= row; i++) dp[i][0] = i
 for (let j = 0; j <= col; j++) dp[0][j] = j

 // dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] )
 for (let i = 1; i <= row; i++) {
     for (let j = 1; j <= col; j++) {
         if (word1.charCodeAt(i - 1) !== word2.charCodeAt(j - 1)) dp[i - 1][j - 1]++
         dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] )
     }
 }

 return dp[row][col]

};