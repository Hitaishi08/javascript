// methods os array

// 1. toString method (convert in a string)

let num = [1,2,3,4]
let b = num.toString() // b now is a string

console.log(b)

// 2. join method (join all the array elemments using a seprater)

let c = num.join(" and ")  // join retrun a string (so c is a string)
console.log(c)
console.log(typeof c);

// 3. pop method (return the last element) update the original array

let r = num.pop()
console.log(num , '\n' ,  r);

// 4. push method (add element at the end of an array) modify the original array

// push return the length of a upadated array

let p = num.push(44, 55)
console.log(num, '\n', p);

// 5. shift method  (remove the first element and returned it) 
// modify the original array

let k = num.shift()
console.log(num, '\n' , k)

// 6. unshift() (add element at begining of an array)
// return new array length

k = num.unshift(10, 12)  // can add more than one element
console.log(num)
console.log(k)  // give new array length


// 7. delete (it is not a methos it is a operater)

// NOTE: when we use delete operater it will not effect the length of an array
// array will be of same length

delete num[0]
console.log(num)

console.log(num.length) // length of array will not change

// 8. concate method  (does not change the original array)

let num2 = ['hello ji', 'namaste ji' , 'howd']
let num3 = [432,490,231]
let newarr = num.concat(num2,num3);  // we can pass more arrays

console.log(newarr);

// Note : num and num2 will not change or effect
// it will return the new array


// 9. sort method (modify the original array)

// sort method sort the array alpabeticaly

let num4 = [1,243,3,290,222,31,4,55,52,6,7]
num4.sort();
console.log(num4);

// how this method will work?? 
// it will sort like first all numbers start from 1 does not matter how big the number is then it will start align numbers start with 2 then 3 ...continue

/* NOTE: sort() takes an optional compare function if this function is provide as first argument the sort() function
consider these values (the values returned from the compare function) as the basis of sorting */

// using compare function we can sort arrat in decending or ascending order

let compare = (a,b) =>{    
    // return a-b     // sort in ascending (lowest to largest)
    return b -a  // sort in decending (largest to lowest)
}

num4.sort(compare)
console.log(num4)

// 10 reverse method (reverse the array)  modify the original array

num4.reverse()
console.log(num4)

// Splice and Slice

// Splice: it can be use to add new item to an arrays
//  modify the source or original array
// return the deleted values

// syntax: splice(position to add, number of element to remove,element to add)

let deletedvalues = num4.splice(2,3,1021,1022,1023,1024,1025);
console.log(`deleted values: ${deletedvalues}`);  // type of deleted value is object
console.log(typeof deletedvalues)
console.log(num4);

// slice method 
// it will not modify the original array

let newa = num4.slice(1,5)
console.log(newa)
console.log(typeof newa)  // type will be object