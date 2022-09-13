const body = document.querySelector("body");

//1. Create a new variable called 'total' and assign it the div with the id of 'total' -->
const total = document.querySelector('#total');
console.log(total);

//2. Create Six Functions (add, subtract, multiplyBy2, divideby2, multiplyBy5, divideBy5)
// Example:
//let add = () => {total.textContent = Number(total.textContent)+ 1;}
function add() {
    total.textContent = Number(total.textContent)+ 1
    window.alert('addition successful');
}
let subtract = () => {
    total.textContent = Number(total.textContent)- 1 
    window.alert('subtraction successful')
}
let multiplyBy2 = () => {
    total.textContent = Number(total.textContent) * 2 ;
    window.alert('multiplication successful')
}
let divideby2 = () => {
    total.textContent = Number(total.textContent) / 2;
    window.alert('division successful')
}
let multiplyBy5 = () => {
    total.textContent = Number(total.textContent) * 5 ;
    window.alert('multiplication successful')
}
let divideBy5 = () => {
    total.textContent = Number(total.textContent) / 5;
    window.alert('division successful')
}

//3. Attach Functions to Buttons

let addBtn = document.getElementById('add');
addBtn.addEventListener('click', add);

const subBtn = document.getElementById('subtract')
subBtn.addEventListener('click', subtract)

const mul2Btn = document.getElementById('mult-2')
mul2Btn.addEventListener('click', multiplyBy2)

const div2Btn = document.getElementById('div-2')
div2Btn.addEventListener('click', divideby2)

const mul5Btn = document.getElementById('mult-5')
mul5Btn.addEventListener('click', multiplyBy5)

const div5Btn = document.getElementById('div-5')
div5Btn.addEventListener('click', divideBy5)
