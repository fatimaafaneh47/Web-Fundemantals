
var number2;
var operator;
var currentNumber= "";


function getDisplay(){
  return document.getElementById("display");
}
function press(number){
  currentNumber += parseFloat(number);
  getDisplay().innerText=currentNumber;
}
function setOP(op){
  operator = op;
  number2=parseFloat(currentNumber);
  currentNumber = "";
  getDisplay().innerText="0";
}
function clr(){
  getDisplay().innerText="0";
  currentNumber="";
  operator= "";
  number2= ""; 
}
  function calculate (){
    var result;
  if(operator === "+"){
    result = number2 + parseFloat(currentNumber);
  }else if (operator === "-"){
    result = number2 - parseFloat(currentNumber);
  }else if(operator === "/"){
    result = number2 / parseFloat(currentNumber);
  }else if(operator === "*"){
    result = number2 * parseFloat(currentNumber);
  }
  getDisplay().innerText= result;
  
}