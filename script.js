document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="completeBtn">Complete</button>
                <button class="deleteBtn">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("completeBtn")) {
            event.target.parentElement.querySelector("span").classList.toggle("completed");
        } else if (event.target.classList.contains("deleteBtn")) {
            event.target.parentElement.remove();
        }
    });
});
