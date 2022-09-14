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
const getRandom = () => COLORS_ARRAY[(Math.floor(Math.random() * 12))]
// Create a li element

const colorMe = () =>{
    
   const li = document.createElement('li')
    //li.addEventListener('click', () => console.log('New Li'))
    li.style.backgroundColor = getRandom();
    // Append the li to the ul
ul.appendChild(li)
console.log(li);
}
colorGenBtn.addEventListener('click', colorMe());

// Should remove all li children from the ul. 
const reset = () => {
    li.style.backgroundColor = 'white';
}
resetBtn.addEventListener('click', reset());
// Should set background color to white.
