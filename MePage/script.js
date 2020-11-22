const colorButton = document.querySelector(".colormode");
const background = document.querySelector("body");
const text = document.getElementsByClassName("white-txt");
colorButton.addEventListener("click", function(){
    background.classList.toggle("colors-black");
    for(var i=0; i < text.length; i++){
        text[i].classList.toggle("colors-white-txt");
    }  
});


//carousel
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImg = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector("#PrevBtn");
const nextButton = document.querySelector("#NxtBtn");

//counter
let counter = 0;
const size = 100;

//button listener
nextButton.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform= 'translateX(' +  (-size) + '%)';
})
prevButton.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform= 'translateX(' +  0 + '%)';
})
