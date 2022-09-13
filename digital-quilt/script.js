const body = document.querySelector("body");

const make = (squares) => {
  for (let i = 1; i <= squares; i++) {
    //create element
    const div = document.createElement("div");
    //add square class
    document.createElement([(div.className = "square")]);
    //uncomment line below to see how many divs are squares
    //console.log(div.classList.contains('square'))
    //style the square
    div.innerText = `${i}`;
    div.style.width = "5px";
    div.style.height = "5px";
    body.style.display = "flex";
    body.style.flexWrap = "wrap";
    div.style.display = "flex";
    div.style.border = "solid";
    div.style.borderColor = "#ffffff";
    //to hard code the random background color uncomment below
    // div.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    div.style.backgroundColor = randomRGB();
    //append element to the DOM
    body.appendChild(div);
  }
  //function generates a random RGB value
  function randomRGB() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
  }
  // console.log(div);

  //get the element to append to
};
//run function to create num squares
make(500);
