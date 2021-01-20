var list = [];
var current_list_item = "";

var listArea
var inputField
var saveButton

window.onload = function() {
    listArea = document.querySelector("#list");
    inputField = document.querySelector("#list-element");
    saveButton = document.querySelector("#saveButton");

    loadList();

    inputField.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            appendItem();
        }
    });

    saveButton.addEventListener("click", saveList);
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

function loadList(){
    if(localStorage.getItem("list0")){
        listStorage = localStorage.getItem("list0");
        current_list_item = "";

        for(var i = 0; i < listStorage.length; i++) {
            if(listStorage[i] === ",") {
                list.push(current_list_item);

                var p = document.createElement("p");
                var textNode = document.createTextNode(current_list_item);
                p.appendChild(textNode);

                listArea.appendChild(p);
                current_list_item = "";
            }
            else if(i === listStorage.length - 1){
                current_list_item += listStorage[i];
                list.push(current_list_item);

                var p = document.createElement("p");
                var textNode = document.createTextNode(current_list_item);
                p.appendChild(textNode);

                listArea.appendChild(p);
                current_list_item = "";
            } else {
                current_list_item += listStorage[i];
            }
        }
    }
}

function saveList() {
    if(localStorage.getItem("list0")){
        localStorage.removeItem("list0");
        localStorage.setItem("list0", list);
    } else {
        localStorage.setItem("list0", list);
    }

}




