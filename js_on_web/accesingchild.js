console.log(document.body.firstChild)  // it will give the first child
console.log(document.body.lastChild)   // it give the last child

// NOTE: you might fill it will  give you array of child nodes and you can perform the methods.
// its not array its a node list.you have to convert it to an array;
// console.log(document.body.childNodes)  // it will give the all the child

let arr  = Array.from(document.body.childNodes)
console.log(arr);



// following is always true

/*
Element.childNodes[0] === Element.firstChild
Element.childNodes[Element.childNodes.length - 1] === Element.lastChild
*/

// NOTE Element.childNodes[0] take all the child and give first child it is not the optimistic.

/* there is also a method element.hasChildNode() to check whether 
there are any child nodes.it will return true if there will be any child else
it will return false.
*/