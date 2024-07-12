// change the color of card title

// let ctitle = document.getElementsByClassName("card-title")[0];

// getElementById gives return the only one element of that  id
let ctitle = document.getElementById('firstcardtitle')
ctitle.style.color = "blue"

// querySelectorAll it will return the all the selector of given class name or id

let ctitles =  document.querySelectorAll('.card-title');

console.log(ctitles);

ctitles[0].style.color = "red"
ctitles[1].style.color = "blue"
ctitles[2].style.color = "green"

// querySelector it will return only first element of all  given css selectors
// efficient version of: document.querySelectorAll('.card-title')[0];

let  btn1 = document.querySelector('.btn-primary')
btn1.style.background = "green"
btn1.style.color = "white"

// getElementByTagName
console.log(document.getElementsByTagName('a'))
console.log((document.querySelector('.card')).getElementsByTagName("a"))

