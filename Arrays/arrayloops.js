let num = [1,2,3,4,5]

/*
for(let i =0 ;i<num.length;i++)
    {
        console.log(num[i])
    }
*/

// forEach method : it return each element of an array

num.forEach((element)=>{
    // inside this function we can perform anything
    console.log(element*element)
})

// inside the forEach function we need to write an another function to perform a tasks
// we can pass different arguments also in a function ex:

num.forEach((element,index,num)=>{
    console.log(element, index, num)
})

// NOTE: if we have html collection we can not use forEach method
// we need to use Array.from

// Array.from : used to create array from other object (convert anything in array)

let name = "hello"

let arr = Array.from(name);
console.log(arr);

// for in loop (it give the keys/index of object/array)

for(let i in num)
    {
        console.log(i);
    }

// for of (it give the value of object/array)

for(let item of num)
    {
        console.log(item);
    }