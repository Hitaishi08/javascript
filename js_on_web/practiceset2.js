let list = document.getElementsByTagName("nav")[0].firstElementChild

first = list.firstElementChild
last = list.lastElementChild
first.style.color = "green"
last.style.color = "green"

Array.from(document.getElementsByTagName("li")).forEach(element =>{
    element.style.background = "white"
});