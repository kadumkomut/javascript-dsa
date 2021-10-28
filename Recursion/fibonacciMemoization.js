function fib(n) {
    const memo = new Map();
    function helper(n){
        if(n<=1) return n;
        if(memo.has(n)) return memo.get(n);
        else memo.set(n,helper(n-1)+helper(n-2));
        return memo.get(n);
    }
    return helper(n);
  }

