let userName = document.getElementById("userName");
let text = document.getElementById("text");
let box = document.getElementById("box");
let text1 = document.getElementById("text1");
let btn = document.getElementById("btn");
let innerButton = document.getElementById("innerButton");

innerButton.style.display = "none"

function never() {
    text.innerText = ""
    text.innerText = "Welcome " + userName.value + ", we have been expecting you.";
    box.style.display = "none";
    text1.style.display = "none";
    btn.style.display = "none";
    innerButton.style.display = "block";
    text.style.fontStyle = "oblique";
}