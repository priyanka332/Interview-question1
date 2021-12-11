const Input = document.querySelectorAll(".input");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const output = document.querySelector(".output");

function add() {
    const calculate = (Number(Input[0].value) + Number(Input[1].value));
    output.innerText = `Total number which you added ${calculate}`;
}
function subtract() {
    const calculate =(Number(Input[0].value) - Number(Input[1].value));
    output.innerText = `Total number which you subtracted ${calculate}`;
}
function multiply() {
    const calculate = (Number(Input[0].value) * Number(Input[1].value));
    output.innerText = `Total number which you Multiply ${calculate}`;
}
function divide() {
    const calculate = (Number(Input[0].value) / Number(Input[1].value));
    output.innerText = `Total number which you divide ${calculate}`;
}
btn1.addEventListener("click",add)
btn2.addEventListener("click",subtract)
btn3.addEventListener("click",multiply)
btn4.addEventListener("click",divide)