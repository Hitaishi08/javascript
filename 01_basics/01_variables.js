const accountId = 144553
let accountEmail = "hitaishi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;  // undifined variable 

// const can not be changed 

// accountId = 4  // not allowed

console.log(accountId);

accountEmail = "hello@gmail"
accountPassword = "22019473"
accountCity = "Bengaluru"  

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not use var 
because of issue in block scope and functional scope
*/