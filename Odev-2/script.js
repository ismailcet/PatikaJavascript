const submitBtn=document.querySelector('.btn-submit');
const inputValue=document.querySelector('#todo');
const list=document.querySelector('.toList');
const alert=document.querySelector('.alert');
const clearAll=document.querySelector('.btn-clear');
//Functions

//Get Value The Input
function getValue(e){
    inputValue.value?addItem(inputValue.value):addAlert();
    inputValue.value='';
    e.preventDefault();
}
// Add Item The List
function addItem(value){
    list.innerHTML +=`  <article class="item">
                            <p class="title">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </article>`;
    //Success Alert Add
    alert.innerText='Başarıyla Eklendi'
    alert.style.backgroundColor='#D1E7DD';

    //Delete item
    const deleteButtons=document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(deleteBtn=>deleteBtn.addEventListener('click',deleteItem));
    //Edit item
    const editButtons=document.querySelector('.edit-btn');
    editButtons.addEventListener('click',editItem);

}
//Add Alert items
function addAlert(){
    alert.innerText='Bir Değer Giriniz !';
    alert.style.backgroundColor='#F8D7DA';
}
//Delete Item Function
function deleteItem(e){
    e.target.parentElement.parentElement.parentElement.remove();
    e.preventDefault();
}
//Delete All items
function deleteAll(){
    list.innerHTML='';
}
//Edit item Function
function editItem(){

}
//Event Listeners
submitBtn.addEventListener('click',getValue);
clearAll.addEventListener('click',deleteAll);

//Delete Alert
if(alert){
    setInterval(function(){
        alert.innerHTML='';
        alert.style.backgroundColor='transparent';
    },1000);
}