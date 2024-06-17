// practice set

// 1. create a variable of type string and try to add a number

let a = "hello"
let b = 32

console.log(a+b)

// 2. use the type of operator to find the datatype of the string in last question

console.log(typeof a+b )  // in this it print type of a the add the b
// output: string32

console.log(typeof (a+b))
// output: string

const a1 = {
    name : "hitaishi",
    rollno: 1666,
    pass: true,
    section: "B"
}

// a1 = "hello"  it will give an error becouse you can't change the value of const

// but u can add new key-value pair
// and also we can update the value of keys

const dict = 
{
    Abundance: "Plenty",
    Accentuate: "Emphasize",
    Acquiesce: "Consent",
    Align: "Position"
}

console.log(dict)

// two ways to access the values

console.log(dict.Align)

console.log(dict['Acquiesce'])