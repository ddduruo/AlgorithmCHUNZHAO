学习笔记
# 1. 贪心算法
贪心算法： 在每一步选择下都在当前选择最优，也就是当前状态下做到局部最优。 但是在实际和工程中 只用贪心是达不到全局最优
         一旦一个问题可以通过贪心法来解决，贪心法一般是解决这个问题的最好办法
         贪心法的高效性以及求得的答案比较接近最优结果。
         贪心法也可以用作辅助算法或者直接解决一些要求结果， 不特别准确的问题。
         简单地说 能够分解成子问题来解决， 子问题的最优解能够递推到最终问题的最优解 这种问题就是最优子结构。
回溯：能够回退
动态规划： 最优判断+回退

## 贪心算法与动态规划的区别在于 它对每个子问题的解决方案都做出去选择， 不能回退
   动态规划会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能
   怎么证明可以用贪心： 从前往后贪， 从后向前贪

# 二分查找
  1. 目标函数单调性
  2. 存在上下界
  3. 能够通过索引访问