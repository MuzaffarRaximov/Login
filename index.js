
const btn = document.querySelector(".menu");
const navbar=document.querySelector(".navbarContext")
const mode=document.querySelector("#mode");
const nav=document.querySelector(".navbar");
const body=document.body;
const text=document.querySelector(".text");
const input=document.querySelector(".input");
const button=document.querySelector("#sendBtn");
const modal=document.querySelector(".modal");
const closeX=document.querySelector("#closeX");
const close=document.querySelector("#close");
const save=document.querySelector("#save");





btn.addEventListener("click",()=>{
    navbar.classList.toggle("show");

})
mode.addEventListener("input",()=>{
    nav.classList.toggle("navDark");
    body.classList.toggle("navDark");

});

//onInput event


 input.addEventListener('change',(evn)=>{
    let value=evn.target.value;
    text.innerHTML=value;
 });

 button.addEventListener("click",()=>{
    modal.classList.add("showModal");
 });

 closeX.addEventListener("click",()=>{
    modal.classList.remove("showModal");
 });

 close.addEventListener("click",()=>{
    modal.classList.remove("showModal");
 });

 save.addEventListener("click",()=>{
    modal.classList.remove("showModal");
 });




 const colorPicker=document.querySelector("#colorPicker");
 const colorZone=document.querySelector(".colorZone");

 colorPicker.addEventListener("change",(e)=>getColor(e.target.value))
 function getColor(evn){
   colorZone.style.backgroundColor=evn;
 };


const imgPicker=document.querySelector("#imgPicker");
const imgZone=document.querySelector(".imgZone");
imgPicker.addEventListener("change",(e)=>getImg(e.target.value))
function getImg(e){
   if(e==='nature'){
      imgZone.src="https://kv-pusu.ucoz.com/_ph/13/1/666610709.jpg?1659099452"
   }
   if(e==='cars'){
      imgZone.src="https://www.ixbt.com/img/x780/n1/news/2022/4/4/Most-Expensive-Cars_large.jpg"
   }
   if(e==='animals'){
      imgZone.src="https://advice.uz/uploads/%D0%BE%D0%BB%D0%B5%D0%BD%D1%8C.jpg"
   }
   
};

// create dynamic elements
const newCards=document.querySelector("#newCards");
const addCards= document.querySelector("#addCards");
const cardsWrapper=document.querySelector("#cardsWrapper");

const newLink=document.createElement("a");
newLink.href="https://kun.uz/";
newLink.innerHTML="Press to enter kun.uz";
cardsWrapper.prepend(newLink);




addCards.addEventListener("click",()=>{
   const newElement=document.createElement("div")
     newElement.innerHTML="hello js";
     newElement.style.backgroundColor="red";
     newElement.classList.add("box");
     newCards.appendChild(newElement);
})




 // scroll
 // scroll to  -  elimentni belgilangan masofaga  surib beradi
 const scrollCard=document.querySelector(".scrollCard");
console.log (document.body.clientHeight) // elementni balandligi beradi
//connsole.log(scrollCard.scrollTo(0,300));

const toEnd=function(){
   window.scrollTo(0,1889);

}

scrollCard.addEventListener("scroll",()=>{
   const top=scrollCard.scrollTop;
   if(top>300){
      scrollCard.style.backgroundColor="green";
   }
   if(top>600){
      scrollCard.style.backgroundColor="yellow";
   }
   if(top>900){
      scrollCard.style.backgroundColor="yellow";
   }
   if(top>1000){
      scrollCard.style.backgroundColor="red";
   }
})

