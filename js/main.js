const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
let i = 0;

for(let el of lists){
    el.style.transform = `rotate(${45*i}deg) translateY(-100vh)`;
    el.querySelector(".pic").style.backgroundImage = `url(img/member${i+1}.jpg)`;
    i++;
}