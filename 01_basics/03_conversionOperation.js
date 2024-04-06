let score = "33"

console.log(typeof score) // method one to check type
console.log(typeof(score)) // second method

// Typecast in number: 

let valueInNumber = Number(score)   //it will convert str into number

console.log(typeof valueInNumber) 

// but if ---->

let num = "3ab"

let newnum = Number(num)

console.log(typeof newnum)  // it will give number as output

// but 3ab is not a number lets print the newnum

console.log(newnum)  // it gives NaN as output 

// NOTE: javascript can typecast the int-string(ex: "3") in number and will type will also be number 
// but make sure to check the the value before proceding into the further programming
// while taking the inputs from the form to check this should stay in your mind

// -------typecast in number(Summary)------
// "33" => 33
// "33ab" => NaN
// true = 1 false=> 0
// null => 0
// "hitaishi" => NaN


// ------TypeCast In Boolean

let loggedIn = 1
let boolLoggedIn = Boolean(loggedIn)

console.log(boolLoggedIn)

console.log("type: ", typeof boolLoggedIn)

// 1 => true
// 0 => false
// "hitaishi" =>true
//  "" => false  (empty string)

// -------typecast to string----------

let somenum = 33

let strnum = String(somenum)
console.log(strnum)
console.log("type: ",typeof strnum)


// **************** Operations *******************

let value = 3;
let negval = -value;
console.log(negval);

let str1 = "hello "
let str2 = "hitaishi"
let str3 = str1 + str2

console.log(str3)

// now let see this

console.log("1" + 2)  // output => 12
console.log(1 + "2")  // output => 12
console.log("1" + 2 + 2)   //output => 122
console.log(1 + 2 + "2")  //output => 32


// this is some tricky conversions that is not preferable

console.log(+true) // output => 1

// true => true
// true+ => 0

console.log(+"") // output => 0 

// increment opertor (x++)

// postfix (++) => the increment operator increments and returns the value before incrementing.

let x = 3
const y = x++

console.log(`x: ${x}, y: ${y}`)
// expected output: x: 4 , y:3

// prefix (++a) => the increment operator increments and returns the value after incrementing.

let a =3
const b = ++a

console.log(`a: ${a} , b: ${b}`)
// expected output: a: 4 , b: 4

