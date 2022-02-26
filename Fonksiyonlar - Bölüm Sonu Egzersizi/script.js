let counter=0;
let number=document.querySelector(".number");
let increase=document.querySelector('.increase');
let decraese=document.querySelector('.decrease');




increase.addEventListener('click',eventClick);
decraese.addEventListener('click',eventClick);

function eventClick(){
    this.className==='increase' ? counter++: counter--;
    number.innerText=counter;
}