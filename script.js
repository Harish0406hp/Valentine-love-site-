/* Typing Love Letter */
const msg="From the moment I met you... my life changed ❤️";
let i=0;
function type(){
if(i<msg.length){
document.getElementById("typing").innerHTML+=msg[i];
i++;
setTimeout(type,70);
}}
type();

/* Proposal Buttons */
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const result=document.getElementById("result");
const music=document.getElementById("music");

yes.onclick=()=>{
result.innerHTML="💖 She said YES!!! 💖";
music.play();
};

no.onmouseover=()=>{
no.style.top=Math.random()*400+"px";
no.style.left=Math.random()*300+"px";
};

/* Floating Hearts */
const canvas=document.getElementById("hearts");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let hearts=[];
for(let i=0;i<60;i++){
hearts.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,size:8+Math.random()*10,speed:1+Math.random()*2});
}

function draw(x,y,s){
ctx.fillStyle="pink";
ctx.beginPath();
ctx.arc(x,y,s,0,Math.PI*2);
ctx.fill();
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
hearts.forEach(h=>{
draw(h.x,h.y,h.size);
h.y+=h.speed;
if(h.y>canvas.height)h.y=0;
});
requestAnimationFrame(animate);
}
animate();
