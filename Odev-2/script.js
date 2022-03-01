const submitBtn=document.querySelector('.btn-submit');
const inputValue=document.querySelector('#todo');
const list=document.querySelector('.toList');
const alert=document.querySelector('.alert');
const clearAll=document.querySelector('.btn-clear');
let idList=[];
//Functions
//Get Value The Input
function getValue(e){
    inputValue.value?addItem(inputValue.value):addAlert();
    inputValue.value='';
    e.preventDefault();
}
// Add Item The List
function addItem(value){
    let id = Math.floor(Math.random() * 100);

    list.innerHTML +=`  <article class="item">
                            <p id="${id}" class="title">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </article>`;
    idList.push(id);

    //Add LocalStorage
    addLocalStorage(id,value);
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
//Delete Item Function
function deleteItem(e){
    let item=e.target.parentElement.parentElement.parentElement;
    let id=item.children[0].id
    item.remove();
    deleteLS(id);
    e.preventDefault();
    alert.innerText="Başarıyla Silindi"
    alert.style.backgroundColor='#FFF3CD';
    
}
//Delete All items
function deleteAll(){
    list.innerHTML='';
    alert.innerText="Hepsi Başarıyla Silindi"
    alert.style.backgroundColor='#FFF3CD'
    localStorage.clear();
}
//Edit item Function

//Add Alert items
function addAlert(){
    alert.innerText='Bir Değer Giriniz !';
    alert.style.backgroundColor='#F8D7DA';
}
function editItem(){
    
}

//Local Storage Function
//Add Local Storage
function addLocalStorage(id,value){
    localStorage.setItem(`${id}`,value);
}
//Get the item Localstorage
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage);
        i = keys.length;

    while ( i-- ) {
        values.push(localStorage.getItem(keys[i]));
    }
    keys.reverse();
    for(let y=0;y<values.length;y++){
        list.innerHTML +=`  <article class="item">
                            <p id="${keys[y]}" class="title">${values[y]}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </article>`;
    }
}
//Delete Local Storage
function deleteLS(value){
    console.log(value);
    localStorage.removeItem(value);
}
//Event Listeners
allStorage();
submitBtn.addEventListener('click',getValue);
clearAll.addEventListener('click',deleteAll);

//Delete Alert
if(alert){
    setInterval(function(){
        alert.innerHTML='';
        alert.style.backgroundColor='transparent';
    },1000);
}

/* Yapılacaklar 
1-Verileri Locala Kaydet
2-Verileri localden yükle
3-Edit butonu
4-Verileri localden sil


*/