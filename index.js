const task = document.querySelector(".user__input");
const btn = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const popupRemove = document.querySelector(".remove");

//Input Validation
const inputValid = function () {
  if (task.value.length >= 1) {
    document.querySelector(
      ".tasks__contanier"
    ).innerHTML += `<div class="section__tasks">
                        <div class="task" id="1">${task.value}</div>
                        <button class="task__delete"><i class="fas fa-trash-alt">delete</i></button>
                     </div>`;
    task.value = "";
    task.focus();
    // deleting an item
    const current__item = document.querySelectorAll(".task__delete");
    for (var i = 0; i < current__item.length; i++) {
      current__item[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    // Completed A Task
    const tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("complete");
      };
    }
  } else {
    //display the popup
    popup.style.display = "flex";
  }
};
btn.addEventListener("click", inputValid);

//Removing the popup
popupRemove.addEventListener("click", function () {
  popup.style.display = "none";
});
