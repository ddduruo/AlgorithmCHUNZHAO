// 中序遍历 遍历过程 左子树-> 根节点-> 右子树
// 写遍历的四部曲：首先要找到最小重复单元 中序遍历的最小重复单元就是 左 -> 根 -> 右
   //1. 首先找到递归的终结条件
   //2. 处理当前逻辑
   //3. 下放到下一层
   //4. 清理当前层 中序遍历无需处理当前层
var inorderTraversal = function(root) {
    let res = []
    let inorder = (root) => {
      //递归跳出条件
        if(root == null){
            return 
        }
      //2.3.处理当前逻辑 并且跳到下一层
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res
}
//用调用栈的方式，实现中序遍历
var inorderTraversal = function(root) {
    const stack = [];
    const res = []
    while(root || stack.length) {
        while(root){
            stack.push(root);
            root = root.left
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right
    }
    return res