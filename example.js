var uniqueOccurrences = function(arr) {
  let map1 = new Map();
  let map2 = new Map();
  let flag = false;
  for(let x of arr){
      if(map1.has(x)){
          map1.set(x, parseInt(map1.get(x))+1)
          flag = true;
          continue;
      }
      map1.set(x,1);
  }
  if(!flag) return false;
  map1.forEach((value)=>{
      if(map2.has(parseInt(value))) {
        flag = false
      };
      map2.set(parseInt(value),value)
  })
  if(!flag) return false;
  return true;
};

let arr = [3,5,-2,-3,-6,-6];
console.log(uniqueOccurrences(arr))