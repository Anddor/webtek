
function init() {
    "use strict";
    var button1, button2, button3, table, model;
    button1 = document.getElementById("sort-button-1");
    button2 = document.getElementById("sort-button-2");
    button3 = document.getElementById("sort-button-3");
    table = document.getElementById("the-table-body");
    
    function updateModel() {
        var i, j, nodes = table.childNodes;
        model = [];
        // childnodes has whitespace between rows.
        for (i = 1; i < nodes.length; i += 2) {
            var row = [];
            for (j = 1; j < nodes[i].childNodes.length; j += 2) {
                row.push(nodes[i].childNodes[j].innerHTML);    
            }
            model.push(row);
        }
    }
    
    function updateView() {
        var i, j;
        for (i = 0; i < model.length; i += 1) {
            table.deleteRow(0);
            var row = table.insertRow(-1);
            
            for (j = 0; j < model[i].length; j += 1) {
                var cell = row.insertCell(-1);
                cell.innerHTML = model[i][j];
            }
        }
    }
    
    function sortByCol(col) {
        console.log("sorting");
        model.sort(function (a, b) {
            if (a[col] === b[col]) {
                return 0;
            }
            
            return a[col] > b[col] ? 1 : -1;
        });
    }
    
    updateModel();
    button1.addEventListener('click', function (event) {
        sortByCol(0);
        updateView();
    });
    button2.addEventListener('click', function (event) {
        sortByCol(1);
        updateView();
    });
    button3.addEventListener('click', function (event) {
        sortByCol(2);
        updateView();
    });
    
}
window.addEventListener("load", init);