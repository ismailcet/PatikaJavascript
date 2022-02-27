const submitBtn=document.querySelector('.btn-submit');
const inputValue=document.querySelector('#todo');
const list=document.querySelector('.toList');
const alert=document.querySelector('.alert');
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

    //Delete item
    const deleteBtn=document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click',deleteItem);
    //Edit item
    const editBtn=document.querySelector('.edit-btn');
    editBtn.addEventListener('click',editItem);

}
//Add Alert items
function addAlert(){
    alert.innerText='Bir Değer Giriniz !';
    alert.style.backgroundColor='#F8D7DA';
}
//Delete Item Function
function deleteItem(e){
    console.log(e.target);
}
//Edit item Function
function editItem(){

}
//Event Listeners
submitBtn.addEventListener('click',getValue);
