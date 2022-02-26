let counter=localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) :0;
let value=document.querySelector('#value');
let decrease=document.querySelector('.decrease');
let reset=document.querySelector('.reset');
let increase=document.querySelector('.increase');

value.innerText=counter;

if(counter >0){
    value.style.color='green';
}
else if(counter < 0){
    value.style.color='red';
}else{
    value.style.color='#102a42';
}


decrease.addEventListener('click',eventClick);
increase.addEventListener('click',eventClick);
reset.addEventListener('click',function(){
    counter=0;
    value.innerText=counter;
    value.style.color='#102a42';
    localStorage.setItem('counter',counter);
});

function eventClick(){
    this.className.includes('increase')? counter++: counter--;
    localStorage.setItem('counter',counter);
    value.innerText=counter;
    if(counter >0){
        value.style.color='green';
    }
    else if(counter < 0){
        value.style.color='red';
    }else{
        value.style.color='#102a42';
    }
}