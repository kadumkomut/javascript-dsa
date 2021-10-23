

const printName = function (){
    console.log(this.hello)
}

function fun(){
    this.hello = "kadum"
}

let f = new fun();
console.log(printName.call(f))


