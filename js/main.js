const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
let i = 0;

for(let el of lists){
    el.style.transform = `rotate(${45*i}deg) translateY(-100vh)`;
    el.querySelector(".pic").style.backgroundImage = `url(img/member${i+1}.jpg)`;
    i++;

    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    play.addEventListener("click", e =>{
        e.currentTarget.parentElement.nextElementSibling.play();
        e.currentTarget.parentElement.parentElement.previousElementSibling.classList.add("on");
    });

    pause.addEventListener("click", e =>{
        e.currentTarget.parentElement.nextElementSibling.pause();
        e.currentTarget.parentElement.parentElement.previousElementSibling.classList.remove("on");
    });

    load.addEventListener("click", e=>{
        e.currentTarget.parentElement.nextElementSibling.load();
        e.currentTarget.parentElement.nextElementSibling.remove();
        e.currentTarget.parentElement.parentElement.previousElementSibling.classList.add("on");
    });
}
