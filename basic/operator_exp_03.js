console.log("operation and expression")

// Airthmetic operators

let a = 16
let b = 4

console.log('a+b: ',a+b)
console.log('a-b: ',a-b)
console.log('a/b: ',a/b)
console.log('a%b: ',a%b)
console.log('a*b: ',a*b)
console.log('a**b: ',a**b)

// it will print first then increament it
console.log('a++: ',a++)
console.log('a: ',a)

// it will increament then it will print
console.log('a++: ',a++)
console.log('a: ',a)

// predecrement
console.log('--a: ',--a)

// post decrement
console.log('a--: ',a--)

// assignment operator

c = 10
c += 5
c -= 10

console.log(c)


// comparision operator

// double equals (==): it will only check the value
let comp1 = 6
let comp2 = "6"
console.log("comp1 == comp2: ",comp1 == comp2)
console.log("comp1 != comp2: ",comp1 != comp2) 

// (===) triple equals: it check the value as well as the data type
console.log("comp1 === comp2: ",comp1 === comp2)
console.log("comp1 !== comp2: ",comp1 !== comp2) 

// ternary operator: ?

// logical operator
// && , || , !

let x = 5
let y = 6

console.log(x<y && x == 5)
console.log(x>y && x == 5)

// or operator
console.log(x>y || x == 5)

// ! not operator: true->false , false->false
console.log(!false)