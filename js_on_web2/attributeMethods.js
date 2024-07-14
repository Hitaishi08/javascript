let first = document.getElementById('first');
console.log(first);

let a = first.getAttribute("class");
console.log(a);

// to check if the attribute exist in the element
console.log(first.hasAttribute("class"));   // return true
console.log(first.hasAttribute("style"));   // return false

// you get set the attribute
// first.setAttribute("hidden","true")   // you should not access direct using id


// you can also change/set the class name

first.setAttribute("class","hello hi")  // you can define many classes seprated by space

// remove attribute remove the attribut from the element

// first.removeAttribute("class");

console.log(first.attributes)

// we can create our custom attribute usign "data- " this attribute will available in a property named dataset

console.log(first.dataset);

console.log(first.dataset.game);
console.log(first.dataset.player);







