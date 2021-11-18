let inputText = document.querySelector('.input-text');
let buttonAdd = document.querySelector('.button-add');
let ul = document.querySelector('ul');
let checkbox = '<input type="checkbox" class="checkbox">';
let deleteIcon = '<i class="fas fa-trash-alt delete-one"></i>'

let addText = () => {
    if(inputText.value===""){
        return alert('field cannot be empty')
    }
    
    let li = document.createElement('li')
    li.innerHTML = checkbox + inputText.value + deleteIcon;
    ul.appendChild(li);
    inputText.value = ""
}

// let deleteList = (e) => {
//     e.remove();
// }

let addTextOnButton = () => addText();

let addTextOnSpace = (e) => {
    if(e.keyCode === 13) addText();
}

inputText.addEventListener('keyup', addTextOnSpace);
buttonAdd.addEventListener('click', addTextOnButton);
