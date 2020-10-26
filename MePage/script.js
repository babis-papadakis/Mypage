const colorButton = document.querySelector(".colormode");
const background = document.querySelector("body");
const text = document.getElementsByClassName("white-txt");
colorButton.addEventListener("click", function(){
    background.classList.toggle("colors-black");
    for(var i=0; i < text.length; i++){
        text[i].classList.toggle("colors-white-txt");
    }  
});