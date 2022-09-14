const body = document.querySelector("body");
// Create Two Functions  addChild and redWedding

const starks = document.querySelector(".starks")

function addChild() {
  const addChildDiv = document.createElement("div")
  document.querySelector(".starks").appendChild(addChildDiv)
  addChildDiv.textContent = "Not Jon Snow"
}
function redWedding() {
while(starks.firstChild){
    starks.firstChild.remove()
}  }
// Attach functions to buttons
const addChildBtn = document.querySelector("#add-child")
addChildBtn.addEventListener("click", addChild)
const redWeddingBtn = document.querySelector("#red-wedding")
redWeddingBtn.addEventListener("click", redWedding)
// The addChild function creates new div & appends it to the starks div
// The redWedding function removes ALL stark children (loop)