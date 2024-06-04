let gameseq=[];
let userseq=[];
let btns=["marron","darkblue","orange","blue"];
let started = false;
let level = 0;
let h2= document.querySelector("h2");
document.addEventListener("keypress",function () {
    if(started ==false) {
    console.log("game started");
    started=true;
    levelUp();
    } 
})
 
function gameFlash(btn) {
    btn.classList.add("flash");

   setTimeout (function () {
    btn.classList.remove("flash");
   },250)
    
}
function userFlash(btn) {
    btn.classList.add("userflash");

   setTimeout (function () {
    btn.classList.remove("userflash");
   },250)
    
}
function checkans(idx) {
    if (userseq[idx]===gameseq[idx]) {
      if (userseq.length === gameseq.length) {
      setTimeout(levelUp,1000);
      }
    }
    else {
        h2.innerHTML=`Game over! your score was <b>${level}<b> <br> press any key to start.`;
    
    reset();
    }
}
function levelUp() {
userseq=[];
    level++;
    h2.innerText= `Level ${level}`;
    let randidx= Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn= document.querySelector(`.${randcolor}`);
   gameseq.push(randcolor);
   console.log(gameseq);
    gameFlash(randbtn);
}
function btnpress() {
    let btn=this;
    userFlash(btn);
    usercolor= btn.getAttribute("id");
    userseq.push(usercolor)
    checkans(userseq.length-1);
}
let allbtns =document.querySelectorAll(".btn");
  for (btn of allbtns) {
    btn.addEventListener("click",btnpress);
}
function reset() {
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}