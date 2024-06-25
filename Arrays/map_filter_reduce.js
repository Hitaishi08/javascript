// 1. map is a function in which we can pass 3 arrguments (value , index , array)

// it is same as forEach but map return new array 

// we use map if we want to make new array
// we use forEach if we want to perform operations


let arr = [10,11,12,13,14]

let a = arr.map((value,index,arr)=>{
        console.log(value,index,arr);
        return value+1;  // these are the values of new array
});

console.log(`new array:`, a)

// 2. filter method (you pass a function and the value for which this function will return true will be add in new array)

// filter method create a new array by filtering out elements

// it will not modify the new array

let a2 = arr.filter((value)=>{
    return value > 12
});

console.log(a2);

// 3. reduce method : reduce an array into single value

// reduce return a value
// reduce function takes two arguments 1. callback func 2. vallue of accumulator

/* callback func also takes two arguments 1. accumulator 2.current value*/

// accumulator is like sum = 0 (sum is accumulator in which sum of values is stored)

let item = [
    {name: "chips", price: 50},
    {name: "coke", price: 40},
    {name: "ramen", price: 125},
    {name: "french fries", price: 69}
]

const totalprice = item.reduce((total,item)=>{
        return total + item.price
},0);


console.log(`total price : ${totalprice}`)