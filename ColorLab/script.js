const ul = document.querySelector('#color-list')
// const li = document.querySelector('#li')
const body = document.querySelector('#body') 
let colorGenBtn = document.getElementById('generate-color');
let resetBtn = document.getElementById('reset-btn');
const COLORS_ARRAY = [
  "red",
  "yellow",
  "magenta",
  "cyan",
  "blue",
  "black",
  "gray",
  "teal",
  "green",
  "purple",
  "violet",
];
// ===== CHALLENGE =====
// 1. Create A Function (generate)
// Function should get a random color from the COLORS_ARRAY
// color and color btn
const getRandom = () => COLORS_ARRAY[(Math.floor(Math.random() * COLORS_ARRAY.length))]
// Create a li element

const colorMe = () =>{
    const li = document.createElement('li')
    li.style.backgroundColor = getRandom();
    
ul.appendChild(li)
//console.log(li);
}
colorGenBtn.addEventListener('click', colorMe());

// reset and reset btn
const reset = () => {
    ul.remove(li)
    li.style.backgroundColor = 'white';
}
resetBtn.addEventListener('click', reset());
// Should set background color to white.
