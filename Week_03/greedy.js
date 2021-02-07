// 股票买卖II https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
//算法流程： 
// 遍历整个股票交易日价格列表price， 只要是第二天的股票价格大于第一天股票价格就卖~ 最后累计result
var maxProfit = function(prices) {
  let result = 0;
  for(let i = 0; i < prices.length - 1; i++){
      if(prices[i + 1] > prices[i]){
          result += prices[i+1] - prices[i]
      }
  }
  return result
};
