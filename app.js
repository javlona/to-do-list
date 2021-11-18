let inputText = document.querySelector('.input-text');
let buttonAdd = document.querySelector('.button-add');
let ul = document.querySelector('ul');
let checkbox = '<input type="checkbox" class="checkbox">';
let deleteIcon = '<i onclick="deleteSingleItem(event)" class="fas fa-trash-alt delete-one"></i>'
let li = document.querySelector('li')


let storage = {
    add: function(key, value){
        return localStorage.setItem(key, JSON.stringify(value))
    },
    get: function(key){
        return JSON.parse(localStorage.getItem(key))
    },
    remove: function(key){
        localStorage.removeItem(key)
    }
};



//add list item from input
let addText = () => {
    //check if it not empty
    if(inputText.value===""){
        return alert('field cannot be empty')
    }
    //
    let todo = storage.get('todo')
    let todoArr = [];
    if(!todo) {
        todoArr.push(inputText.value);
    } else {
        todoArr = [...todo, inputText.value];
    }
    storage.add('todo', todoArr)
    
    let li = document.createElement('li')
    let newTodo = storage.get('todo')
    li.innerHTML = checkbox + newTodo[newTodo.length-1] + deleteIcon;
    ul.appendChild(li);
    inputText.value = ""
}

//remove list item individually on delete icon
let deleteSingleItem = (e) => {
    e.target.parentElement.remove()
    let todos = storage.get('todo')
    let current = e.target.parentElement.innerText;

    let index = todos.indexOf(current)
    todos.splice(index, 1);
    storage.add("todo", todos);
}

//fire action on event
let addTextOnButton = () => addText();
let addTextOnSpace = (e) => {
    if(e.keyCode === 13) addText();
}

inputText.addEventListener('keyup', addTextOnSpace);
buttonAdd.addEventListener('click', addTextOnButton);
