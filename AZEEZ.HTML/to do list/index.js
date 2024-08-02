const input = document.querySelector(".input");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

let todos = []
button.addEventListener("click", function () {
    if(input.value == ""){
        alert("Enter something")
        return;
    }

    // todoList.innerText = input.value;
    todoList.innerText = "";
    todos.push(input.value)
    input.value = "";
    // todoList.innerText = todos;
    renderTodo()                                      // const todo = [azeez, ameen, jasim]
})

let editEventTargetID = null;
function renderTodo () {
    // todos.forEach((item)=>{
        for(i=0 ; i < todos.length; i++){
            const addTodo = document.createElement("div");
            addTodo.className = "add-todo";
            addTodo.id = i;
            const list = document.createElement("p");
            // list.innerText = item;
            list.innerText = todos[i]
    
            const buttonWrapper = document.createElement("div");
            buttonWrapper.className = "button-wrapper";
    
            const editButton = document.createElement("button");
            editButton.innerText = "Edit";
            editButton.className = "edit";
            editButton.id = i;
    
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete";
            deleteButton.id = i;
    
            buttonWrapper.append(editButton)
            buttonWrapper.append(deleteButton) 
            addTodo.append(list)
            addTodo.append(buttonWrapper)
            todoList.append(addTodo)
    
            editButton.addEventListener("click", function (e){
                editEventTargetID = e.target.id;
                document.querySelector(".edit-button").style.display = "block";
                document.querySelector(".add-button").style.display = "none";

                input.value = todos[e.target.id];
            })

            deleteButton.addEventListener("click", function (e){
            todos.splice(e.target.id, 1)
            console.log(todos)
            todoList.innerText = "";
            renderTodo()
            })

           
        }
        // })
}
document.querySelector(".edit-button").addEventListener("click", function(){
    document.querySelector(".edit-button").style.display = "none";
    document.querySelector(".add-button").style.display = "block";
    todos.splice(editEventTargetID, 1, input.value);
    todoList.innerText = "";
    input.value = "";
    renderTodo()
})