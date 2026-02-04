function go(id){
let overlay=document.getElementById("overlay");
overlay.style.top="0";

setTimeout(()=>{
document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
overlay.style.top="-100%";

if(id==="letter"){spawn("💋",35)}
},600);
}

function yes(){
spawn("💖",40);
setTimeout(()=>go("gift"),600);
}

/* RUNNING NO BUTTON */
let noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{
let x=Math.random()*400-200;
let y=Math.random()*200-100;
noBtn.style.transform=`translate(${x}px,${y}px)`;
});

/* PARTICLES */
function spawn(symbol,count){
for(let i=0;i<count;i++){
let p=document.createElement("div");
p.className="particle";
p.innerText=symbol;
p.style.left=Math.random()*100+"%";
p.style.animationDuration=(4+Math.random()*5)+"s";
document.body.appendChild(p);
setTimeout(()=>p.remove(),9000);
}
}
