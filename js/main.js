const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = frame.querySelectorAll("audio");

const len = lists.length-1;

let num = 0; //버튼 클릭시 회전각도 구하는 카운트
let active = 0; //현재 활성화되어있는 article의 순번을 담을 변수
const deg = 45; 
let i = 0; //article 초기 각도 회전시킬때 쓰는 카운트

//현재 선택된 article의 앨범사진을 rotation해줌
function activation(index, lists){
    for(let el of lists){
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}

//prev클릭시 ++하면서 각도를 변경해줌
prev.addEventListener("click", () => {
    num++;
    frame.style.transform = `rotate(${deg*num}deg)`;

    (active == 0) ? active = len : active--;

    activation(active, lists);
});

//next클릭시 -- 하면서 각도를 변경해줌
next.addEventListener("click", () => {
    num--;
    frame.style.transform = `rotate(${deg*num}deg)`;

    (active == len) ? active = 0  : active++;

    activation(active, lists);
})


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
