// // Select elements
// const taskInput = document.getElementById("task");
// const addButton = document.getElementById("add");
// const taskList = document.getElementById("taskList");

// // Add task to the list
// addButton.addEventListener("click", function () {
//     const taskText = taskInput.value.trim();
//     if (taskText !== "") {
//         const listItem = document.createElement("li");
//         listItem.textContent = taskText;
//         taskList.appendChild(listItem);
//         taskInput.value = "";
//     }
// });

// // Remove task from the list when clicked
// taskList.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.remove();
//     }
// }); 


let input = document.getElementById("input");
let text = document.querySelector(".taskList");

function Add() {
    if(input.value != ""){
        let li = document.createElement("li");
        li.innerHTML = "▢" + " " +  input.value ;
        text.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "🗑️";
        li.appendChild(span);
    }
    else{
        alert("Please Enter a Task.")
    }
    input.value = "";
    saveData();
}

text.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",text.innerHTML);
}

function displayData(){
    text.innerHTML = localStorage.getItem("data");
}

displayData()