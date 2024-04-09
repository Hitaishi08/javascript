//------there are two types of datatypes------
// 1. primitive datatype  2. non-primitive datatype(or Reference type)

// Primitive Datatypes: 7 types(they all are call by value means original data is not modified or when dealing with basic data types. you get copy )
// they are also pre defined data types 

// 1. String
// 2. Number
// 3.  Boolean
// 4. null (empty)
// 5. undefined (when you declare the variable but you dont know what value you should assign to it)
// 6. Symbol (kisi bhi value ko unique banane ke liye we use symbol)
// 7. BigInt (bohot jayada badi values ke liye)

const score = 100
const scorevalue = 100.3
const isloggedIn = false
const outsideTemp = null
let userEmail; //(undefined)

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid) 

const bigNumber = 84375893759398478472n //Bigint


// Non-Primitive (Reference)

// these are data type jinka memory me reffernce directly allocate kiya ja skta hai
// created by the programmer

// 1.Array            //datatype->object
// 2.Objects         //datatype->object
// 3.Function       //datatype->function object


// -------------NOTE------------
// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.

// array
const hero = ["IronMan","Thor","SpiderMan","Hulk","Black Widow","Captain Marvel"]

// object 
let myobj = {
    name: "hitaishi",
    age: 18,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memories: 
// 1.Stack (used for Primitive datatypes)  jo bhi maine yaha variable declaire kiya uska copy milta hai 
// 2. Heap (used for non-primitive)  or heap memeory se muje value ka refference milta hai(original value ka)

let myname = "hitaishi"

let fullname = myname

fullname = "hitaishi singhaniya"

console.log(fullname)   
console.log(myname) // it will not change because you will get the copy not the original value


let userone ={
    id: "123",
    name: "user1"
}

let usertwo = userone;  //(you will get the refference not the copy)

usertwo.id = "111"

console.log(userone.id)
console.log(usertwo.id)

// explain: userone and usertwo both variable name will be declare in the stack but they both point to the same memory location inside the heap in which the value is stored.


