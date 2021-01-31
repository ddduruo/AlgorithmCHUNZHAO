//因为前序遍历的递归和中序实现差不多，递归函数的原理相同，所以前序遍历采用调用栈的方式实现
var preorderTraversal = function(root) {
  //1.初始化栈 初始化结果数组
  //2.先push根节点内
  //3.再判断根节点的左右子树是否存在 
  //4.若存在 先push又子树 再push左子树
  const res = []
  if(!root){
      return res
  }
  const stack = []
  stack.push(root)
  while(stack.length){
      const cur = stack.pop()
      res.push(cur.val)
      if(cur.right){
          stack.push(cur.right)
      }
      if(cur.left){
          stack.push(cur.left)
      }
  }
  return res
};