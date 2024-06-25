// array ia a collection of item
// hold more than one value

let a = [1,2,3,4,5, null , false , 'not present']

console.log(a);

// how  to accesss the element  of the array

console.log(a[0]);
console.log(a[1]);
console.log(a[5]);
console.log(a[11]);  // if index is not present/exist it will give undefined

// length property can also be used in arrays

console.log(a.length);

// can we change or add the value in an array? (ans: yes)

// adding a new value to an array
a[8] = 99
console.log(a);

// changing value of an array

a[1] = 100
a[7] = 'present'
console.log(a);

// NOTE: arrays are muttable and they can be changed

// type of array is object

console.log(typeof a)

for(let i =0;i<a.length;i++)
    {
        console.log(a[i]);
    }