let name1 =  {
    firstname : "kadum",
    lastname : "komut"
}

let printName = function () {
    console.log(this.firstname,this.lastname)
}

const result = printName.bind(name1)
result();

// similar behavior of bind method
Function.prototype.mybind = function(...args){
    let obj = this;
    return function(){
        obj.call(args[0]);
    }
}