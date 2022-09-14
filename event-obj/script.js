const commentBtn = document.querySelector('#commentbutton')

console.log(commentBtn);

commentBtn.addEventListener('click', function(e){

    const li = document.createElement('li')

    const input = document.querySelector('input')

    li.textContent = input.value
  
    document.querySelector('ul').appendChild(li)
})

const imgBtn = document.querySelector('#imagebutton')

console.log(imgBtn);

commentBtn.addEventListener('click', function(e){

    const li = document.createElement('li')

    const input = document.querySelector('input')

    li.textContent = input.value
  
    document.querySelector('ul').appendChild(li)
})