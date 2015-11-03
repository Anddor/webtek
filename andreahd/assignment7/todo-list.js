
function init() {
    "use strict";
    var clearBtn, addBtn, taskInput, taskArea, tasks;
    clearBtn = document.getElementById("clear");
    addBtn = document.getElementById("add");
    taskInput = document.getElementById("input");
    taskArea = document.getElementById("task-area");
    
    function handleAddTask() {
        if (taskInput.value === "") {
            // No empty tasks
            return;
        }
        var text, task, check, btn;
        task = document.createElement('div');
        task.setAttribute("class", "task");
        
        text = document.createTextNode(taskInput.value);
        check = document.createElement("INPUT");
        check.setAttribute("type", "checkbox");
        check.setAttribute("class", "checkbox");
        
        task.appendChild(check);
        task.appendChild(text);
        
        taskArea.appendChild(task);
        taskInput.value = "";
        taskInput.focus();
    }
    
    function handleClear() {
        
        var i, task, check, tasks;
        tasks = taskArea.getElementsByClassName("task");
        console.log(tasks);
        
        for (i = 0; i < tasks.length; i += 1) {
            task = tasks[i];
            check = task.getElementsByTagName("input")[0];
            console.log(task);
            
            if (check.checked) {
                console.log("checked!");
                taskArea.removeChild(task);
                i -= 1; //There is now one less item in the list, so we need to take one step backwards.
            }
        }
    }
    
    clearBtn.addEventListener('click', handleClear);
    addBtn.addEventListener('click', handleAddTask);
}
window.addEventListener("load", init);