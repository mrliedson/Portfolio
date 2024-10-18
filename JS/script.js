let toogle = document.querySelector(".toggle");
let text = document.querySelector(".text");
let body2 = document.querySelector("body")
let p = document.querySelector("p, .text")
let img = document.querySelector("img")

function animatedtoggle(){
    toogle.classList.toggle("active");
    if(toogle.classList.contains("active")){
        text.innerHTML = "ON";
        document.body.style.backgroundImage = "url(../img/bg-desktop.jpg)"
        p.style.color = 'white';
        img.src = "img/2.jpg"

        
    } else{
        text.innerHTML = "OFF";
        document.body.style.backgroundImage = "url(../img/bg-desktop-light.jpg)"
        p.style.color = 'black';
        img.src = "img/1.jpg"
    }
}