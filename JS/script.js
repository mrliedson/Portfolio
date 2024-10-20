let toogle = document.querySelector(".toggle");
let p = document.querySelector("p");
let body2 = document.querySelector("body")
let img = document.querySelector("img")
const link = document.getElementById('a');


function animatedtoggle(){
    toogle.classList.toggle("active");
    if(toogle.classList.contains("active")){
        document.body.style.backgroundImage = "url(../img/bg-desktop.jpg)"
        link.style.color = `white`;
        img.src = "img/2.jpg"
        p.style.color = 'white';
       
    } else{
        document.body.style.backgroundImage = "url(../img/bg-desktop-light.jpg)"
        img.src = "img/1.jpg"
        p.style.color = 'black';
      
    }
}