const body = document.querySelector('body');
const make = (squares) => {
for (let i = 1; i <= squares; i++) {
				//create element
		const div = document.createElement('div');
		document.createElement([div.className = 'square']);
		div.innerText = `${i}`;
        div.style.width = "50px";
        div.style.height = "50px";
        body.style.display = 'flex';
        body.style.flexWrap = "wrap";
        div.style.display = "flex";
        div.style.border = "1px";
        div.style.borderColor = black;
        const randColorRGB = () => {
                let r = Math.floor(Math.random()*256);
                let g = Math.floor(Math.random()*256);
                let b = Math.floor(Math.random()*256);
                return `rgb(${r},${g},${b})`;
            }   
            
                div.style.backgroundColor = randColorRBG();
                
        
            }
            
            body.appendChild(div);
				//console.log(div);
		
		//append element to the DOM
		//get the element to append to
		
		
        
		}





make(500);