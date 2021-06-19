const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = frame.querySelectorAll("audio");
const len = lists.length-1;
const deg = 45; 
let i = 0; //article 초기 각도 회전시킬때 쓰는 카운트
let num = 0; //버튼 클릭시 회전각도 구하는 카운트
let active = 0; //현재 활성화되어있는 article의 순번을 담을 변수


//prev클릭시
prev.addEventListener("click", () => {
    initMusic();// 앨범정지

    num++;
    frame.style.transform = `rotate(${deg*num}deg)`;

    (active == 0) ? active=len : active--;
    activation(active, lists);// 현재리스트 == lists-1번째, 따라서 article 각도를 --하면서  변경해줌
});

//next클릭시
next.addEventListener("click", () => {
    initMusic();
    
    num--;
    frame.style.transform = `rotate(${deg*num}deg)`;

    (active == len) ? active = 0  : active++;
    activation(active, lists);// 현재리스트 ==! lists-1번째, 따라서 article 각도를 ++ 변경해줌
});

//play pasue load 버튼 동작
for(let el of lists){
    el.style.transform = `rotate(${45*i}deg) translateY(-100vh)`;
    el.querySelector(".pic").style.backgroundImage = `url(img/member${i+1}.jpg)`;
    i++;

    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    play.addEventListener("click", e =>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(!isActive) return;

        e.currentTarget.closest("article").querySelector("audio").play();//해당타겟 .play의 audio로 가서 play메소드 실행
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");//.pic에 on클래스를 추가(on은 .pic이 rotation하는 animation)
    });

    pause.addEventListener("click", e =>{
        let isActive = e.currentTarget.closest("article");
        if(!isActive) return;

        e.currentTarget.closest("article").querySelector("audio").pause();//해당타겟 .pause의 audio로 가서 pause메소드 실행
        e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");//.pic에 on클래스를 제거(.pic의 animation 제거)
    });

    load.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(!isActive) return;
        
        e.currentTarget.closest("article").querySelector("audio").load();//해당타겟 .load의 audio로 가서 load메소드 실행
        e.currentTarget.closest("article").querySelector("audio").play();//해당타겟 .load의 audio로 가서 play메소드 실행
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");//.pic에 on클래스를 추가
    });;
};

//현재 선택된 article의 앨범사진을 rotation해줌
function activation(index, lists){
    for(let el of lists){
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}

//pause나 load누를때 앨범 돌아가는거 제거
function initMusic(){
    for(let el of audio){
        el.pause();
        el.load();
        el.closest("article").querySelector(".pic").classList.remove("on");
    }
}
