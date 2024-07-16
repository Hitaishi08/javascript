let a = document.getElementsByTagName('div')[0];
a.innerHTML = a.innerHTML + "<h1>Hello World</h1>";

// inserting/apending element in html

let div = document.createElement('div');
div.className = "second";
div.innerHTML = "<h2>Carpe Diem</h2>"
a.appendChild(div);
// a.prepend(div)
// a.before(div)
// a.after(div)
// a.replaceWith(div)