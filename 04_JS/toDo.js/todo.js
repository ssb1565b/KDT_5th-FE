const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");
function addList() {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
  } else {
    const todoEl = inputTask.value;
    const p = document.createElement("p");
    const li = document.createElement("li");
    const checkBtn = document.createElement("input");
    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("material-symbols-outlined");
    deleteBtn.textContent = "delete";
    checkBtn.setAttribute("type", "checkbox");
    p.append(todoEl);
    li.append(checkBtn, p, deleteBtn);
    todoList.append(li);

    checkBtn.addEventListener("click", function (e) {
      checkBtn.checked &&
        p.setAttribute("style", "text-decoration: line-through;");
    });
    deleteBtn.addEventListener("click", function () {
      deleteBtn.parentNode.remove();
    });

    inputTask.value = "";
  }
}

addBtn.addEventListener("click", addList);
