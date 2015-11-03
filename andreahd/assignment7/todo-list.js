
function init() {
    "use strict";
    var clearBtn, addBtn, taskInput, taskArea, done;
    clearBtn = document.getElementById("clear");
    addBtn = document.getElementById("add");
    taskInput = document.getElementById("input");
    taskArea = document.getElementById("task-area");
    done = [];
    
    function handleAddTask() {
        var text, task, btn;
        task = document.createElement('div');
        
        
        text = document.createElement('p');
        btn = document.createElement('button');
        
        task.appendChild(btn);
        
        
        btn.addEventListener('click', function (event) {
            console.log("done!");
        });
    }
    
    addBtn.addEventListener('click', handleAddTask);
    
    
    
}
window.addEventListener("load", init);