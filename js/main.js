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
        e.currentTarget.parentElement.nextElementSibling.play();//해당타겟 .play의 audio로 가서 play메소드 실행
        e.currentTarget.parentElement.parentElement.previousElementSibling.classList.add("on");//.pic에 on클래스를 추가(on은 .pic이 rotation하는 animation)
    });

    pause.addEventListener("click", e =>{
        e.currentTarget.parentElement.nextElementSibling.pause();//해당타겟 .pause의 audio로 가서 pause메소드 실행
        e.currentTarget.parentElement.parentElement.previousElementSibling.classList.remove("on");//.pic에 on클래스를 제거(.pic의 animation 제거)
    });

    load.addEventListener("click", e=>{
        e.currentTarget.parentElement.nextElementSibling.load();//해당타겟 .load의 audio로 가서 load메소드 실행
        e.currentTarget.parentElement.nextElementSibling.play();//해당타겟 .load의 audio로 가서 play메소드 실행
        e.currentTarget.parentElement.parentElement.previousElementSibling.classList.add("on");//.pic에 on클래스를 추가
    });;
}
