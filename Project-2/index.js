const pause = document.getElementById('pause') ; 
const play = document.getElementById('play') ; 
const reset = document.getElementById('reset'); 

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let hourVal = 0 , minVal = 0 , secVal = 0; 
let running = false ; 


const initialVal = "00";
 




//function of reset button! 
reset.addEventListener('click',() => { 
  hours.innerHTML = initialVal;
  minutes.innerHTML = initialVal; 
  seconds.innerHtml = initialVal;
})












//fucntion to set a value ! ( we need it in 01, 02 ... 10 format !! )
function setVal(value) { 
  if (value <= 9) { 
    return `0 + ${value}`;

  }else {
    return `${value}`;
  }
}