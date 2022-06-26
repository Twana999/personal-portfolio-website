let new_url = document.getElementById("new-url-link");
let new_url_container = document.getElementById('new-url');
let clipboard_icon = document.getElementById('clipboard_icon');

function resize() {
  let url = document.getElementById("url").value;
  let height = document.getElementById("height").value;
  let width = document.getElementById("width").value;
  let image = document.getElementById("ourImage");

  showAndHide(image);
  showAndHide(new_url_container);


  /* only returns index number of last occurence of the forward slash : 27 */
  let lastIndex = url.lastIndexOf("/");
  
  let lastPart = url.substring(lastIndex);
  let generatedUrl = `https://source.unsplash.com${lastPart}/${width}x${height}`;

  image.src = generatedUrl;
  new_url.innerText = generatedUrl;
  new_url.href = generatedUrl;

}

function copyText(htmlElement){
  if(!htmlElement){
    return;
  }
  let inputElement = document.createElement("input");
  new_url.setAttribute('title','Copied To Clipboard');
  inputElement.setAttribute("value", new_url.innerText);
  document.body.appendChild(inputElement);
  inputElement.focus();
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
}
new_url.addEventListener('click',function(e){
  e.preventDefault();
})
clipboard_icon.addEventListener('click', function(e){
  e.preventDefault();
  copyText(new_url);
});  

function showAndHide(element){
  element.classList.remove("d-none");
  element.classList.add("d-block");
}

$(function() {
  $(".bi").on('click', function() {
    $(this).toggleClass("bi-clipboard-check");
    $(this).toggleClass("bi-clipboard");

    console.log($(this).prop('classList').value);
  });
});