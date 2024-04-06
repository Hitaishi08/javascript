// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2 != 1);

console.log("2" > 1); 
console.log("02" > 1);

// output=> true;
// because js atomatically convert the string to int

// these types of conversion is not preferable
console.log(null > 0) // output=>false
console.log(null == 0)  // output=>false
console.log(null >= 0)  // output=>true

// comparision operators(> < >= <=) convert the null to number(0)
// but == does not do it they work differently

// 1. 0>0 => false
// 2. null == 0 => false
// 3. 0>=0 => true


// === (strict check)

console.log("2" === 2);
// output=> false

// "==" vs "==="

//(==) it will compare the values/data irrespective to their data types 
// (===) it will compare the values of same datatypes (it check datatype both values should be of same datatype)