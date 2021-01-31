// 每一位都有3种选择：1、2、3。
// 利用约束条件「不能重复选」，做剪枝，剪去不会产生正确解的选项（分支）。
// 用一个 hashMap，记录选过的数，下次遇到相同的数，跳过。
// 这样就不会进入「不会得出解的分支」，做无效的搜索。
const permute = (nums) => {
  const res = [];
  const used = {};
  function dfs(path) {
    if (path.length == nums.length) {
      res.push(path.slice());
      return;
    }
    for (const num of nums) {
      if (used[num]) continue;
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }
  dfs([]);
  return res;
};