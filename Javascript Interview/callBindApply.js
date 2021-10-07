// let name1 = {
//     firstname : "kadum",
//     lastname : "komut"
// }
// let name2 = {
//     firstname : "eliza",
//     lastname : "siram"
// }

// let printfullName = function(hometown)  {
//     console.log(this.firstname+" "+this.lastname+" from "+hometown);
// }

// // call - function borrowing
// printfullName.call(name1,"pasighat");
// printfullName.call(name2,"itanagar");

// // apply
// printfullName.apply(name1,["itanagar"])

// // bind - same as call but returns a function which can be invoked later 
// const result = printfullName.bind(name2,"tawang");


let participant1 = {
    name : 'Kadum',
    battery : 80,
    chargeBattery : function() {
        this.battery = this.battery+100;
    }
}

participant1.chargeBattery();
console.log(participant1.battery)

let participant2 = {
    name : "eliza",
    battery : 10
}

participant1.chargeBattery.call(participant2);
console.log(participant2.battery)