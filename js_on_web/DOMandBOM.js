/*
    WINDOW OBJECT , DOM AND BOM

WINDOW OBJJECT: window object repersent the browser window and provide methods to control it
-> window object automatically created by the browser
-> window object are the object of the browser window ,not the javascript
-> window object is a global object

                    WINDOW OBJECT
            DOM         BOM         JAVASCRIPT CORE

DOM: document object model  (repersent page content as html)
->DOM is a hierarchical representation of HTML documents
->your whole hmtl page becomes called document
->html ke page ko object bana kr uska naam document rakh diya hai
->It defines how to access, manipulate, and modify document elements using scripting languages like JavaScript.

Why is DOM Required?
HTML is used to structure the web pages and Javascript is used to add behavior to our web pages.
When an HTML file is loaded into the browser, the JavaScript can not understand the HTML document directly.
So it interprets and interacts with the Document Object Model (DOM), which is created by the browser based on the HTML document.


 */


console.log(window);

window.console.log(document)

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.background = "red"
    console.log("loading perfectly")
  });










































