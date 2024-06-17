// js has 7 primitive datatypes i.e built in data types

// to remember these datatypes: nn bb ss u

// data type means which tupe of data can be store in a variable 

//Non Primitive datatype:-
//Objectes is a key-value pairs

let a = null  //we need to write null manually/explicitly
let b = 354
let c = true
let d = BigInt("740")+BigInt("60")
let e = "hello"
let f = Symbol("i am a nice symbol")
let g = undefined

console.log(a , b , c , d , e , f , g)

// to check the datatype of a variable

console.log(typeof d)

// None Primitive datatypes : objects are key-value pair non-primitive data type

const a1 = {
    name: "hitaishi",
    roll_no: 1666,
    pass: true
}

// a1 is reffernce to above object

// as a1 is constant we can not assign another value to ex number,string or even object
// it will only point to above object

// but we can make changes in the object

// we can add new key-value pair in the object

// example: 

a1['friends'] = 4

// we can also update the value of any key in this

a1['roll_no'] = 21

console.log(a1)