const users = [
    { firstname : "kadum",lastname : "komut",age: 20},
    { firstname : "akshay",lastname : "saini",age :21},
    { firstname : "hello",lastname : "world",age : 40},
    { firstname : "meet",lastname : "me",age : 40},
]

// first name of all the people whose age is less than 30

const filter = users.filter((value)=>{
    if(value.age<30){
        return value.firstname;
    }
}).map(value=>{
    return value.firstname;
})

let s = "sljf"
s.split('').sort

console.log(filter)