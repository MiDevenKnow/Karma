window.calculator = window.calculator || {};


(function() {  
  window.calculator.init = function() {

    function checkers(str){
      for (let i = 0; i < str.length-1; i++) {
        if('+-/*'.indexOf(str[i]) != -1 && '+-/*'.indexOf(str[i+1]) != -1){
          return true;
        }
      }
      return false;
    }

    let memory = "0";

    // select all the buttons
    const buttons = document.querySelectorAll('button');
    // select the <input type="text" class="display" disabled> element
    const display = document.querySelector('.display');

    // add eventListener to each button
    function startUpCalculator(){
      buttons.forEach(function(button) {
        button.addEventListener('click', calculate);
      });
    }

    // calculate function
    function calculate(event) {
      // current clicked buttons value
      const clickedButtonValue = event.target.value;

      if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
          // calculate and show the answer to display
          if(checkers(display.value)){
            display.value = "Error";
          }else{
            display.value = eval(display.value);
            memory = parseFloat(display.value);
          }
        }
      
      } else if (clickedButtonValue === 'C') {
        // clear everything on display
        display.value = '';

      } else if (clickedButtonValue === 'sqrt') {
        display.value = eval(display.value);
        display.value = parseFloat(Math.sqrt(display.value).toFixed(3));
        memory = parseFloat(display.value);

      } else if (clickedButtonValue === '+-') {
        display.value = eval(display.value);
        display.value = eval(display.value*-1);
        memory = parseFloat(display.value);
    
      } else if (clickedButtonValue === '%') {
        if(checkers(display.value)){
          display.value = "Error";
        }else{
        display.value = eval(display.value) / 100;
        memory = parseFloat(display.value);
        }
      
      } else if (clickedButtonValue === 'MRC') {
        display.value = memory;
      
      } else if (clickedButtonValue === "M+") {
        if(display.value !== ""){
          if(checkers(display.value)){
            display.value = "Error";
          }else{
          val = eval(display.value);
          display.value = eval(parseFloat(memory) + parseFloat(val));
          memory = parseFloat(display.value);
          }
        }else{
          display.value = memory;
        }
      
      } else if (clickedButtonValue === "M-") {
        if(display.value !== ""){
          if(checkers(display.value)){
            display.value = "Error";
          }else{
          val = eval(display.value);
          display.value = eval(parseFloat(memory) - parseFloat(val));
          memory = parseFloat(display.value);
          }
        }else{
          display.value = memory;
        }
        
      } else {
        // otherwise concatenate it to the display
        display.value += clickedButtonValue;
      }

    }
    startUpCalculator();
  };
})();



function checkers(str){
  for (let i = 0; i < str.length-1; i++) {
    if('+-/*'.indexOf(str[i]) != -1 && '+-/*'.indexOf(str[i+1]) != -1){
      return true;
    }
  }
  return false;
}

let memory = "0";

// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
function startUpCalculator(){
  buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });
}

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      if(checkers(display.value)){
        display.value = "Error";
      }else{
        display.value = eval(display.value);
        memory = parseFloat(display.value);
      }
    }
  
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';

  } else if (clickedButtonValue === 'sqrt') {
    display.value = eval(display.value);
    display.value = parseFloat(Math.sqrt(display.value).toFixed(3));
    memory = parseFloat(display.value);

  } else if (clickedButtonValue === '+-') {
    display.value = eval(display.value);
    display.value = eval(display.value*-1);
    memory = parseFloat(display.value);
 
  } else if (clickedButtonValue === '%') {
    if(checkers(display.value)){
      display.value = "Error";
    }else{
    display.value = eval(display.value) / 100;
    memory = parseFloat(display.value);
    }
  
  } else if (clickedButtonValue === 'MRC') {
    display.value = memory;
  
  } else if (clickedButtonValue === "M+") {
    if(display.value !== ""){
      if(checkers(display.value)){
        display.value = "Error";
      }else{
      val = eval(display.value);
      display.value = eval(parseFloat(memory) + parseFloat(val));
      memory = parseFloat(display.value);
      }
    }else{
      display.value = memory;
    }
  
  } else if (clickedButtonValue === "M-") {
    if(display.value !== ""){
      if(checkers(display.value)){
        display.value = "Error";
      }else{
      val = eval(display.value);
      display.value = eval(parseFloat(memory) - parseFloat(val));
      memory = parseFloat(display.value);
      }
    }else{
      display.value = memory;
    }
    
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}

startUpCalculator();