//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    
    //Create Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear todo input value
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;

    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;

        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();  
        })
    }

    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    } 


}