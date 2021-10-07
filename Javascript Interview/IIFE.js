const increment = (()=>{
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credits(s)`);
    return ()=> {
        counter++;
        credits(counter);
    }
})();
increment()
increment()
increment()
