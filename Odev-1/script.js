let title=document.querySelector('title');
let nameWrite=document.querySelector('.name');
let clock=document.querySelector('.clock');


function time(){
    let date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let second=date.getSeconds();
    clock.innerText=`${hour}:${min}:${second}`;
}
setInterval(time,1000);


let name=prompt('Enter the name : ');
title.innerText=name;
nameWrite.innerText=name;