// varibales: it is the name of a memory location that stores data

// js provide us ability to change the data type of the variables in runtime/execution of a programm 
// and it is called dynamically language
// javacript is case sensitive language

// var is used to declare the variable
// but var is not prefrable so we use let


let a =67
console.log(a)

a = "harry"
console.log(a)

// rules for variable names

// dont start variable name with numbers or special character
// you can not use reserved words for variable name
// letters, digits, underscores an $ sign is allowed


// Const , let and var

var a1 = 45
var b = "hello"
var c = null
var d = undefined

// var is globaly scoped while let and const is block scoped
// var can be updated and re-declare with in its scope

{
    // var b = "this" // b is re-declared and as it is in block scope but i can change the global b also

    let b = "this"  // this is block and it will not change the global b
    console.log(b)
}

console.log(b);

// let can be updated but not re-declared

// const can neither be updated nor be re-declared
// const must be initialize when declared -
