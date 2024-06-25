// Q1.
let name = "hitaishi\'"
console.log(name.length);

// Q2. includes function (return boolean value)

const sentence = 'the quick brown fox jumps over the lazy dog'
const word = 'fox';
console.log(sentence.includes(word));
console.log(`the word "${word}" ${sentence.includes(word)? 'is': 'is not'} in the sentence`)


// startsWith  method

const sent2 = 'hello world'
const word2 = 'hello'

console.log(`the sentence ${sent2.startsWith(word2) ? 'start with' : 'doesn\'t start with'} ${word2}`)

// endsWith method
console.log(`the sentence ${sent2.endsWith(word2) ? 'ends with' : 'doesn\'t ends with'} ${word2}`)

// convert a string into lowercase

const sent3 = 'HELLO DUNIYA'
console.log(sent3.toLowerCase())

// problem 4

let str = "please give Rs 1000"
let amount = Number.parseInt(str.slice(15))    // we need to convert string to int

console.log(amount)
console.log(typeof amount) 

// problem 5 try to change the char of a string can you able to do it??

let friend = "Deepika"
friend[3] = 'r'
console.log(friend);

// i can not change the any charcter of a string but if i try to change it will not give the error
// string is immutable