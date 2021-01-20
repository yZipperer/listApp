var list = [];
var current_list_item = "";

var listArea
var inputField

window.onload = function() {
    listArea = document.querySelector("#list");
    inputField = document.querySelector("#list-element");

    inputField.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            appendItem();
        }
    });
};

function appendItem() {
    current_list_item = inputField.value;
    list.push(current_list_item);
    inputField.value = "";
        
    updateList(listArea, current_list_item);
}

function updateList(listArea, current_list_item){
        //listArea.innerHTML = "<p>"+ String(list[i]) + "</p>";

    var p = document.createElement("p");
    var textNode = document.createTextNode(current_list_item);
    p.appendChild(textNode);

    listArea.appendChild(p);
    
}




