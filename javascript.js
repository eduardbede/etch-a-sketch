


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i <= (rows * cols); i++) {
      let cell = document.createElement("div");
      cell.style.backgroundColor = "white";
      cell.addEventListener('mouseover', myFunction);
      container.appendChild(cell).className = "grid";
      
    };
  };
  
  let colorPicker = document.getElementById('colorPicker');
  
  function myFunction(e) {
      e.target.style.backgroundColor = colorPicker.value;
     // e.target.style.transition = "0.3s";
  }
  
  let buton = document.getElementById("buton");
  let grid = document.getElementsByClassName('grid');
  
  function alb(){
    for(i=0; i<grid.length; i++){
      grid[i].style.backgroundColor = "white";
    };
  };
  
  buton.addEventListener('click', alb);
  
  let slider = document.getElementById("myRange");
  let output = document.getElementById("demo");
  output.innerHTML = slider.value + " x " + slider.value;
  
  
  slider.oninput = function() {
    output.innerHTML = this.value + " x " + this.value;
  };
  
  makeRows(slider.value, slider.value);
  
  function resetOnChange(){
    alb();
    makeRows(slider.value, slider.value);
  };
  
  
  function colorChange(){
    colorPicker.value;
    console.log(colorPicker.value);
  };





const date = new Date();
let year = date.getFullYear();
const an = document.getElementById("an").textContent = year + " @eduardbede ";
  