let a = document.getElementById('first')

a.className = 'yellow dark-text'

// add class name to the classlist
a.classList.add('green')

// to list the className:
console.log(a.classList)

// to remove the classname from the classlist
a.classList.remove('red')

// toggle - agar class hai to remove kr dega agar nhi hai to add kr dega
a.classList.toggle('blue')

// to check if class exist or not in element
console.log(a.classList.contains('green'))