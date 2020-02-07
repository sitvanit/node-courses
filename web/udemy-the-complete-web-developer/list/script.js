// dom - document object model - the browser creates to allow us to modify the html and css
// each browser has js engine (chrome - v8) they read the js file line by line.
// we can use js to talk with the dom
// document is the screen we see on the browser
// window is the window of the browser and the document is inside it.
// window.document
// window is the big parent of everything in the browser. and if we don't mentioned it, it assumes we did.
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const buttonDelete = document.getElementsByClassName("delete");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function toggleDownAfterClick(event) {
    event.target.classList.toggle('done');
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.addEventListener("click", toggleDownAfterClick);
