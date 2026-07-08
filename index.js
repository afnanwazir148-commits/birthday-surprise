// ------------------------------
// Loading Screen
// ------------------------------
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 3000);
});

// ------------------------------
// Password
// ------------------------------
function checkPassword() {
     let pass = document.getElementById("password").value;

    if (pass === "14072006") {
      document.getElementById("login").style.display = "none";
      document.getElementById("main").style.display = "block";
      const music = document.getElementById("music");

music.play().catch(() => {
    console.log("Autoplay blocked.");
});

        confetti({
            particleCount:250,
            spread:180,
            origin:{y:0.6}
        });

    } else {
         document.getElementById("error").innerHTML =
         "❌ Wrong Password ❤️";

    }

}

// ------------------------------
// Music Button
// ------------------------------
const music = document.getElementById("music");
const playBtn = document.getElementById("play");
playBtn.onclick = () => {
if(music.paused){
music.play();
playBtn.innerHTML="⏸ Pause Music";
}else{
music.pause();
playBtn.innerHTML="🎵 Play Music";
}
};

// ------------------------------
// Floating Hearts
// ------------------------------

function createHeart(){
const heart=document.createElement("div");
heart.innerHTML="❤️";
heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-50px";
heart.style.fontSize=(20+Math.random()*30)+"px";
heart.style.animation="fall 6s linear";
heart.style.zIndex="9999";
document.body.appendChild(heart);
setTimeout(()=>{
heart.remove();
},6000);
}
setInterval(createHeart,350);

// ------------------------------
// Falling Animation
// ------------------------------
const style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(-50px) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}
`;
document.head.appendChild(style);

// ------------------------------
// Welcome Message
// ------------------------------

setTimeout(()=>{
console.log("❤️ Happy Birthday My Guriya ❤️");
},5000);

// ------------------------------
// Fireworks Every 8 Seconds
// ------------------------------
setInterval(()=>{
confetti({
particleCount:120,
spread:120,
origin:{
x:Math.random(),
y:Math.random()-0.2
}
});
},8000);

// Blow Candle
document.getElementById("blowBtn").onclick=function(){
let flame=document.getElementById("flame");
flame.style.display="none";
confetti({
particleCount:350,
spread:180,
origin:{y:0.6}
});

setTimeout(()=>{
alert("🎉 Happy Birthday My Guriya ❤️\n\nMay Allah Bless You Always 🤲❤️");
},500);
}

// ❤️ Love Letter
const message=`
💌 A Letter For My Guriya ❤️
Meri Pyari Guriya... ❤️
Aaj ka din meri zindagi ke sabse khoobsurat dinon mein se ek hai, kyun ke aaj ke din Allah Ta'ala ne is duniya ko aap jaisi khoobsurat, masoom aur pyari rooh se nawaza.
Main dil se Allah ka shukar ada karta hoon ke meri zindagi mein aap hain. Aap meri har muskurahat ki wajah hain, meri har dua ka sabse khoobsurat hissa hain aur meri har khushi ki asal wajah hain.
Jab bhi main apne mustaqbil ke baare mein sochta hoon, har khwab mein sirf aap hoti hain. Meri sabse badi khwahish sirf itni si hai ke Allah Ta'ala humein hamesha ek dusre ke naseeb mein likhe aur har mod par apni rehmat ke saaye mein rakhe.
Meri ek aur dil se nikli hui dua hai... In Sha Allah ek din hum dono Baitullah ke saamne saath kharay honge. Hum Kaaba Sharif ko dekhte hue Allah Ta'ala ka shukar ada karenge aur ek dusre ke liye aisi duaein maangenge jo humein duniya aur aakhirat dono mein hamesha ke liye ek saath rakhein.
Aaj aap ke birthday par meri har dua sirf aap ke liye hai...
Ya Allah...
Aapki zindagi ko hamesha khushiyon se bhar de.
Aapko hamesha sehat، sukoon aur lambi umr ata farma.
Aapki har jaiz dua qubool farma.
Aapki har muskurahat ko hamesha salamat rakhe.
Aur agar meri zindagi ki sabse khoobsurat ne'mat koi hai, to woh sirf aap hain... meri Guriya. Is ne'mat ko kabhi mujhse juda na hone dena.

Ameen Ya Rabb-ul-Alameen. 🤲❤️

Happy Birthday Meri Guriya... ❤️
Aap meri zindagi ka sabse khoobsurat hissa hain.
Aap meri dua hain.
Aap meri muskurahat hain.
Aap meri khushi hain.
Aap mera sukoon hain.

Har guzarta hua din mujhe yeh ehsaas dilata hai ke Allah Ta'ala ne mujhe aap ki soorat mein sabse khoobsurat tohfa diya hai.
Main hamesha aapki izzat karunga, aapka saath dunga aur har dua mein sabse pehle aapko yaad rakhunga.
Allah Ta'ala se meri sirf ek hi dua hai...
Ke meri zindagi ka har naya safar, har nayi khushi aur har nayi manzil sirf aap ke saath ho.

Happy Birthday Once Again, Meri Pyari Guriya. ❤️

Forever Yours,
❤️ Afnan ❤️
`;
let i=0;
function typeLetter(){
if(i<message.length){
document.getElementById("typing").innerHTML+=message.charAt(i);
i++;
setTimeout(typeLetter,45);
}
}
setTimeout(typeLetter,2500);

// ❤️ Auto Slideshow
const images=[
"pic/6f7b8ded94eea815e55f909b680bf3f7.jpg",
"pic/8e852a462269d30a13774abb8e6f5412.jpg",
"pic/73fb720bf422d6e4aeda40279d4fba33.jpg",
"pic/395a842458463bbd4f1b09dc18bf6608.jpg",
"pic/7473293d80a14c45d1558037ab7a5757.jpg",
"pic/ac102ca760f933cb9565aa561cc8f5e0.jpg",
"pic/7473293d80a14c45d1558037ab7a5757.jpg",
"pic/8e852a462269d30a13774abb8e6f5412.jpg"
];
let index=0;
setInterval(()=>{
index++;
if(index>=images.length){
index=0;
}
document.getElementById("slideImage").src=images[index];
},3000);

// Gift Box
document.getElementById("giftBox").onclick=function(){
document.getElementById("giftMessage").innerHTML=
"❤️ My Biggest Gift Is You, Guriya ❤️";
confetti({
particleCount:500,
spread:200,
origin:{y:0.6}
});
}

// Balloons
function balloon(){
let b=document.createElement("div");
b.innerHTML="🎈";
b.style.position="fixed";
b.style.left=Math.random()*100+"vw";
b.style.bottom="-80px";
b.style.fontSize=(30+Math.random()*40)+"px";
b.style.animation="fly 10s linear";
document.body.appendChild(b);
setTimeout(()=>{
b.remove();
},10000);
}
setInterval(balloon,1200);
const style2=document.createElement("style");
style2.innerHTML=`
@keyframes fly{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-120vh);
opacity:0;
}
}
`;document.head.appendChild(style2);

// Final Fireworks
setTimeout(()=>{

confetti({

particleCount:800,

spread:360,

origin:{y:0.5}

});

},5000);

// ❤️ Final Surprise

document.getElementById("finalBtn").onclick = function(){

confetti({

particleCount:1000,

spread:360,

origin:{y:0.5}

});

setTimeout(()=>{

alert(`🎉 Happy Birthday My Guriya ❤️

May Allah bless you with happiness,
good health,
success,
and endless love.

Ameen 🤲❤️

Forever Yours,
Afnan ❤️`);

},1000);

}

// 🌹 Rose Petals
function rose(){
let r=document.createElement("div");
r.innerHTML="🌹";
r.style.position="fixed";
r.style.left=Math.random()*100+"vw";
r.style.top="-50px";
r.style.fontSize=(20+Math.random()*20)+"px";
r.style.animation="roseFall 8s linear";
r.style.zIndex="999";
document.body.appendChild(r);
setTimeout(()=>{
r.remove();
},8000);
}
setInterval(rose,700);
const roseStyle=document.createElement("style");
roseStyle.innerHTML=`
@keyframes roseFall{
0%{
transform:translateY(-50px) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}
`;

document.head.appendChild(roseStyle);