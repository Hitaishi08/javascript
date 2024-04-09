const name = "hitaishi"
const repocount = 50

// console.log(name + repocount + " value"); 

// avoid using above syntax instead use given below to concate 

// backticks (` `) --> string Interpolation

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

// another way to declare a string variable 

const gamename = new String('angry birds')  // declare as string object and it has key and values

console.log(gamename[0]);
console.log(gamename.__proto__);  // output: {} (object is not empty you can check the values in web browser console)

console.log(gamename.length);

console.log(gamename.toUpperCase());  // it will not change the original value

// (charAt()) you can check the character on given index 

console.log(gamename.charAt(2))

// (indexOf()) you can check the position of given char

console.log(gamename.indexOf('y'));

// slicing (0-4 and 4 will not be include)

// .subString() you can not give -ve values
const newstring = gamename.substring(0,4)
console.log(newstring);

// .slice()  in this you can also give -ve values
const anotherstr = gamename.slice(-8,4)
console.log(anotherstr);

// trim()
const newString = "  hitaishi  "

// before trim
console.log(newString);  // output will show with spaces

// after trim
console.log(newString.trim()) // it will remove/trim the spaces

// replace() -->    .replace(search_value,replace_value)

const url = "https:hitaishi.com/hitaishi%20singhaniya"
console.log(url.replace('%20','-'))

// it will replace the %20 with the '-'


// includes() --> you can that that given word is present in string or not
console.log(url.includes("hitaishi"));
console.log(url.includes("marvel"));


const word = new String('just ask anything from universe and it will give you')
console.log(word);

// to convert string into the array  OR
// The split() method splits a string into an array of substrings

console.log(word.split(' '));



