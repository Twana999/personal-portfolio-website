/* Handle click */
var hexCodeVariable = document.getElementById('hexCode'); 
var ClipIcon = document.getElementById("clipboard_icon");
var triggered = false;
function clickHandler() {
  let randomColor = generateRandomColor();

  /* select an element by ID, and change it's styling */
  document.getElementById(
    'container'
  ).style.backgroundColor = `#${randomColor}`;
}

/* Generate Random Number hex value */
function generateRandomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  hexCodeVariable.innerText = '#'+randomColor;
  return randomColor;
}
setInterval(clickHandler, 2000);


function copyText(htmlElement){
  if(!htmlElement){
    return;
  }
  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", hexCodeVariable.innerText);
  document.body.appendChild(inputElement);
  inputElement.focus();
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
}

function changeIcon() {
 if(!triggered){
  ClipIcon.addEventListener('click',function(){
    alert("copied hex code");
    ClipIcon.classList.toggle("bi-clipboard-check");
    ClipIcon.classList.toggle("bi-clipboard");
    copyText(hexCodeVariable);
  })
  triggered = true;
 }
};
