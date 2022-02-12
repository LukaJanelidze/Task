let add = document.getElementById('add');
let ToDoContainer = document.getElementById('ToDoContainer');
let inputField = document.getElementById('inputfield');

add.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    ToDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        paragraph.style.textDecorationColor = "red";
    })
    paragraph.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraph);
    })
})