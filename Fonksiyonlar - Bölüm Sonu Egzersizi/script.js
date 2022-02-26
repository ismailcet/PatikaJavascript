let value=document.querySelector('#value');
let decrease=document.querySelector('.decrease');
let reset=document.querySelector('.reset');
let increase=document.querySelector('.increase');

let counter=0;

increase.addEventListener('click',eventClick);
decrease.addEventListener('click',eventClick);
reset.addEventListener('click',function(){
    counter=0;
    value.innerText=counter;
    value.style.color='#102a42';
})

function eventClick(){
    this.className.includes('increase') ?counter++:counter--;
    value.innerText=counter;
    if(counter>0){
        value.style.color='green';
    }
    else if(counter <0){
        value.style.color='red';
    }
    else{
        value.style.color='#102a42'
    }
}