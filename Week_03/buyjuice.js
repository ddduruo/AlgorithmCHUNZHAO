// 题号 860. 柠檬水找零 https://leetcode-cn.com/problems/lemonade-change/
// 模拟 + 贪心
// 由于一开始没有任何钞票，因此我们拥有的钞票面值只可能是5、10、20三种。 5元的直接收下即可， 10元找5
// 元，20元的则是3张5美元钞票， 第两种是1张10元和一张5元，尽量保留5美元的钞票。
// 用两个变量维护两个变量 一个是fiveNumber  另一个是tenNumber
var lemonadeChange = function(bills) {
  let fiveNumber = 0;
  let tenNumber = 0;
  for(let i = 0; i < bills.length; i++){
      if(bills[i] == 5){
          fiveNumber += 1
      }else if(bills[i] == 10){
          if(fiveNumber == 0){
              return false
          }else{
              fiveNumber--;
              tenNumber++
          }
      }else if(bills[i] == 20){
          if(tenNumber > 0 && fiveNumber > 0){
              tenNumber--;
              fiveNumber--
          }else if(fiveNumber >= 3){
              fiveNumber = fiveNumber - 3;
          }else{
              return false
          }
      }
  }
  return true
};