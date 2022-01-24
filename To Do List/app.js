let inputVal = document.getElementById('input')
let addİtemBtn = document.querySelector('.input-group-prepend')
let list = document.getElementById('list')
let close = document.querySelector('.close')
let deleteAll = document.getElementById('deleteAll')
let items;

addİtemBtn.addEventListener('click',addNewİtem);
list.addEventListener('click',deleteİtem);
deleteAll.addEventListener('click',deleteAllİtem);

loadItems();

function addNewİtem(e){

    if(inputVal.value == ""){
        alert("Add New İtem");
    }
    
    createİtem(inputVal.value)

    setItemFromLS(inputVal.value);

    inputVal.value = "";

    e.preventDefault();
}

function loadItems(){
    items = getItemsFromLS()
    items.forEach(function(item){
        createİtem(item)
    })
}

function getItemsFromLS(){
    if(localStorage.getItem('To Do')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('To Do'))
    }
    return items;
}

function setItemFromLS(text){
    items = getItemsFromLS();
    items.push(text)
    localStorage.setItem('To Do',JSON.stringify(items))
}


function createİtem(text){
   const li = document.createElement('li')
   li.appendChild(document.createTextNode(text))

   const span = document.createElement('span');
   span.classList = 'close';
   span.innerHTML = '<i class="fas fa-times"></i>';

   li.appendChild(span);

   list.appendChild(li)
}

function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
    if(item === text){
        items.splice(index,1)
    }
    })
    localStorage.setItem('To Do',JSON.stringify(items))
}

function deleteİtem(e){
    if(e.target.className === "fas fa-times"){
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();
        }
        deleteItemFromLS(e.target.parentElement.parentElement.textContent)
    }
      e.preventDefault();
}

function deleteAllİtem(e){
    if(confirm("Are you sure?")){
         while(list.firstChild){
             list.removeChild(list.firstChild)
         }
         localStorage.clear()
    }
    e.preventDefault();
}