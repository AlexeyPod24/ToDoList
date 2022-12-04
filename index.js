const addBtn = document.querySelector('#typefield__add-button')
const inputField = document.querySelector('#type-field')
const userNames = document.querySelector('.span');
const savedLists = []
let sectionOne = document.querySelector('.section-one')
let sectionTwo = document.querySelector('.section-two')
let test2 = document.getElementById('type-field')

window.addEventListener('load', () => {
    
    const username = (localStorage.getItem('username')) || '';

userNames.value = username;

userNames.addEventListener('change', e => {
    localStorage.setItem('username', e.target.value)
});

addBtn.addEventListener('submit', function (e) {
    e.preventDefault;

})

addBtn.addEventListener('click', function() {

    if (!inputField.value) {
        alert('Please type task inside input field!')
        return
    } 

    const newDiv = document.createElement('div')
    newDiv.classList.add('flex')
    newDiv.style.padding = 1 + 'em';
    sectionTwo.append(newDiv)

    const newCheck = document.createElement('input')
    newCheck.type = 'checkbox';
    newDiv.append(newCheck)

    const newInput = document.createElement('input');
    newInput.id = 'type-field';
    newInput.type = 'text';
    newInput.setAttribute('readonly', 'readonly');
    newInput.value = inputField.value;
    newDiv.append(newInput);


    const editBtn = document.createElement('button');
    editBtn.classList.add('edit')
    editBtn.textContent = 'Edit';
    newDiv.append(editBtn)

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete')
    deleteBtn.textContent = 'Delete';
    newDiv.append(deleteBtn)







   
})

})










 