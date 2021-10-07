function add(a){
    return function(b){
        return a+b;
    }
}

console.log(add(2)(3))

class hello {
    #water = 33;
    constructor(){

    }
}

const h = new hello();
console.log(h.water)