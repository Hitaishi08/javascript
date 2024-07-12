console.log(document.body.firstChild)

a = document.body.firstChild;

console.log(a.parentNode);
console.log(a.parentElement);

console.log(a.firstChild.nextSibling)

/* we will get the everything including nodes and element in above case
we will first child because the space node will be the first and the next sibling of this
node will be first div but if we compress the elements in one line we will get first child
as first div and next sibling will be second div.
*/

// in the next chapter we will see how to get the only elements 

// now we will see how to get only elements 