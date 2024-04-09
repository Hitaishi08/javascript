const score = 400;  // js automatically define it as number
// console.log(score);

// you can also explicitly define it using Number keyword
// it is Object Number
const balance = new Number(100);

// console.log(balance);

// converting into string

// console.log(balance.toString().length)

// you can the set the number of digit you want after the decimal
// console.log(balance.toFixed(2));

// precision: it will kind of round of the number
const othernum = 23.8966
// console.log(othernum.toPrecision(3))  // output: 23.8966

// num = 123.8966 and toPrecision(3) => output = 124 (round of)
// num = 1123.8966 and toPrecision(3) => output = 1.12e+3


// this will seprate the number by commas 
// bydefault: USA but you can change it in India and it will do seprate acc to indian
const integer = 10000000
// console.log(integer.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++

console.log(Math);

// this convert -ve values into +ve
console.log(Math.abs(-4));

// it will round of the values
console.log(Math.round(4.6));

// Math.ceil()
// it will choose the big number if num = 4.2
// it will convert it into 5 even after decimal 2 is smaller than the 5.
console.log(Math.ceil(4.2))

// Math.floor
// it will choose the lower value if num = 4.9
// it will convert it into 4 even after decimal 9 is bigger than 5
console.log(Math.floor(4.9));

// to find the min value from the array

console.log(Math.min(4,5,6,2,10));

// to find the max value
console.log(Math.max(4,5,6,2,10));

// Math.random() 
// Note: it will always give value between 0 t0 1.

console.log(Math.random());  // give values between 0 -1.
console.log((Math.random()*10) +1); // now give values starting from 1 to kahi tak

// now to set the min value you want and the max value to get any random value between them

// we set the min and max

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






