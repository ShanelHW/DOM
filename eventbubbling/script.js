const ul = document.querySelector('ul')
const li = document.querySelector('li')
const body = document.querySelector('body')

const createli = () =>{
    const li = document.createElement('li')
    li.addEventListener('click', () => console.log('New Li'))
    return li;
}
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