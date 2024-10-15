let toogle = document.querySelector(".toggle");
let text = document.querySelector(".text");
let body2 = document.querySelector("body")

function animatedtoggle(){
    toogle.classList.toggle("active");
    if(toogle.classList.contains("active")){
        text.innerHTML = "ON";
        document.body.style.backgroundImage = "url(../img/bg-desktop.jpg)"
        
    } else{
        text.innerHTML = "OFF";
        document.body.style.backgroundImage = "url(../img/bg-desktop-light.jpg)"
    }
}