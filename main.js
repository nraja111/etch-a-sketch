const container = document.querySelector(".container");
const body = document.querySelector("body");
let isMouseDown = false;
let red = 0;
let green = 0;
let blue = 0;
let random = false;
let erase = false;

body.setAttribute("style", "outline: solid red 5px; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 1000px: height: 100px; padding: 100px; margin: 0; ");
container.setAttribute("style", "display: flex; width: 500px; height: 500px; flex-wrap: wrap; border: 2px solid black; margin-left: 0px; margin-top: 150px; ");

function setSize(size){
let itemSize = 500/ size + 'px';
 for(let i =0; i<size*size; i++){

    let temp = document.createElement("div");
    temp.setAttribute("style", "border: 1px solid rgba(0, 0, 0, .1); margin: 0; box-sizing: border-box; background= rgba(255, 255, 255, 0);")
    temp.style.width = itemSize;
    temp.style.height = itemSize;
    temp.setAttribute("id", "theDiv");
    
    temp.addEventListener('mousedown', function(e) {
        isMouseDown = true;
    });
    
   
    temp.addEventListener('mouseup', function(e) {
        isMouseDown = false;
    });
    temp.addEventListener("mouseenter",function (e) {
       
        if(isMouseDown==true && random == false && erase == false ){
        
        
            let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
            if (currentOpacity <= 0.9) {
                this.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${currentOpacity + 0.1})`;
            } else {
                this.style.backgroundColor = `rgba(${red}, ${green}, ${blue},  1)`;
               
            }
        

        
        } else if (isMouseDown==true && random == true && erase == false) {
            
            let tempred =  Math.floor(Math.random() * 255);
            let tempblue =  Math.floor(Math.random() * 255);
            let tempgreen =  Math.floor(Math.random() * 255);

            let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
            if (currentOpacity <= 0.9) {
                this.style.backgroundColor = `rgba(${tempred}, ${tempgreen}, ${tempblue}, ${currentOpacity + 0.1})`;
            } else {
                this.style.backgroundColor = `rgba(${tempred}, ${tempgreen}, ${tempblue},  1)`;
              
            }
           
        } else if(isMouseDown==true && erase == true){
            this.style.backgroundColor = `rgba(0, 0, 0, 0)`;

        }
    });
   
    container.appendChild(temp);

 }


}


document.querySelector('.slider').addEventListener('input', function() {
    var sliderValue = this.value;
    const container = document.querySelector(".container");
    container.textContent = "";
    setSize(sliderValue);
  });

  document.querySelector('.redslider').addEventListener('input', function() {
    red = this.value;
   ex();
 });

 document.querySelector('.green').addEventListener('input', function() {
   green = this.value;
   ex();
 });

 document.querySelector('.blue').addEventListener('input', function() {
   blue = this.value;
   ex();
 });

 document.querySelector('.redslider').addEventListener('input', function() {
     red = this.value;
    ex();
  });

  document.querySelector('.green').addEventListener('input', function() {
    green = this.value;
    ex();
  });

  document.querySelector('.blue').addEventListener('input', function() {
    blue = this.value;
    ex();
  });

  document.querySelector('.rand').addEventListener('click', function() {
    
   
    random = !random;
    if(random == true){
    document.querySelector('.rand').classList.add('active');
    } else{
        document.querySelector('.rand').classList.remove('active');
    }

    
    
    

  });

  document.querySelector('.eraser').addEventListener('click', function() {
    
    erase = !erase;

    if(erase == true){
        document.querySelector('.eraser').classList.add('active');
        } else{
            document.querySelector('.eraser').classList.remove('active');
        }
  });

  function ex(){
    const example = document.querySelector(".example");
    example.textContent = "";
    let box = document.createElement("div");
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    box.style.border = "1px solid black";
    box.style.margin = "10px";

    
    example.appendChild(box);
}



  setSize(16);