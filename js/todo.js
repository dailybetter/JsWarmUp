const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"


let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)) 
}
/*localStorage에 toDos저장
localStorage는 String포멧만 저장할 수 있으므로
JSON.stringify함수를 활용하여 toDos를 String으로 저장
*/

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

}


function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo.Text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    toDoList.appendChild(li);

}


function hadleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit",hadleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== Null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}