const ul = document.querySelector('ul')
const li = document.querySelector('li')
const body = document.querySelector('body')

li.addEventListener('click', function(e){
    console.dir(e);
    console.log(e.target);
    e.stopPropagation();
})

ul.addEventListener('click', function (e) {
    console.log(e.target);
})

body.addEventListener('click', function (e) {
    console.log(e.target);
})