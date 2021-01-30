

//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
//functions

function addTodo(event)
{
    //prevent form from submitting
    event.preventDefault();
    console.log("Hello");
    //todo div
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");
    //li creation
    const newtodo =document.createElement("li");
    newtodo.innerText=todoInput.value;
 
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo); // putting the li in div

    //add to local storage


    saveLocalTodos(todoInput.value);
    //completed button
  const completedButton =document.createElement('button');
  //difference in innerText vs innerHTML
  //innertext just contains the text inside the element
  //innerhtml contains the tags too
  //completedButton.innerText ='<i class="fa fa-check"></i>' wont work
  completedButton.innerHTML ='<i class="fa fa-check"></i>'//this will
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);



    //delete button

    const trashButton =document.createElement('button');
    trashButton.innerHTML ='<i class="fa fa-trash"></i>'//this will
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //now we want to attach the todo to todolist ul

    todoList.appendChild(todoDiv);

    //clear value
    todoInput.value="";

}

function deleteCheck(event)
{
//console.log(event.target);
const item = event.target;
console.log(item.classList[0]);
if(item.classList[0]==='trash-btn')
{
  //console.log(item.parentElement);
  const todo = item.parentElement;
  removeLocalTodos(todo);
todo.remove();
}
if(item.classList[0]==='completed-btn')
{
    item.parentElement.firstElementChild.style.textDecoration="line-through";
    item.parentElement.classList.add("completed");
}
}

function saveLocalTodos(todo)
{

    //check - hey do i already have things in there?
    let todos;
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
    //setItem how it works is that is takes a key and on that appends the value
}

function getTodos()
{
    let todos;
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
  todos.forEach(function(todo)
  {
//do the entire thing again;
const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");
    //li creation
    const newtodo =document.createElement("li");
    newtodo.innerText=todo;
 
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo); // putting the li in div

    //add to local storage


  
    //completed button
  const completedButton =document.createElement('button');
  //difference in innerText vs innerHTML
  //innertext just contains the text inside the element
  //innerhtml contains the tags too
  //completedButton.innerText ='<i class="fa fa-check"></i>' wont work
  completedButton.innerHTML ='<i class="fa fa-check"></i>'//this will
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);



    //delete button

    const trashButton =document.createElement('button');
    trashButton.innerHTML ='<i class="fa fa-trash"></i>'//this will
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //now we want to attach the todo to todolist ul

    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo)
{
    let todos;
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndexer =todo.firstElementChild.innerText;
    console.log(todos.indexOf(todoIndexer));
    todos.splice(todos.indexOf(todoIndexer),1);
    //splice method takes 2 arguments one is the index we want to remove and second is the number of elemets we want to remove) 
    localStorage.setItem("todos",JSON.stringify(todos));

}