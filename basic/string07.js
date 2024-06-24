// string: it is a collection of character
// strings are immutable (you can not change the original string)


// there are two ways (syntax) to create a string
// 1. single quote 2. double quote

let name = "hitaishi"

console.log(name.length);  // length is a property

let brother = 'gourav'

// to access the char from the string

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);

// Template literals (back ticks): also known as string iterpolation

let boy1 = "ram"
let boy2 = "shyam"

// task: ram is a frienf of shyam

console.log(`${boy1} is a friend of ${boy2}`)

// you can enter the double quotes or single quotes in above syntax

// Escape sequence

let fruit = "man\'go"
console.log(fruit)

// 1. \' count as 1 char and it is an escape character


// String Methods:

let word = "hello"

// to find the length (property)
console.log(word.length);


// to convert in upercase

console.log(word.toUpperCase());

// to convert in lowercase

console.log(word.toLowerCase());

// slicing  (index start from the 0 to end)

console.log(name.slice(2,4))     // it will not include 4 (print from 2nd index to 3)

// if you give only one argument

console.log(name.slice(2))  // print index from 2 to end

// replace methode

console.log(name.replace("tai",""));


// concate method

console.log(name.concat(" is a sister of ", brother , " they annoy each other"));

// trim method

let friend = "          world         "

console.log(friend)

console.log(friend.trim());


for(let i in name)
    {
        console.log(name[i]);
    }

// you can not the change the character of astring
// name[0] = 'c'     // error