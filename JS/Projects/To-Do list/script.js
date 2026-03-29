const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//ceating the function add the task to the listContainer
function addTask(){
    if(inputBox.value === ''){
        alert("You haven't written anything!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span) 
    }
    inputBox.value = "";
    saveData();
}

//adding fuction for the li when checked and unchecked and the delete function
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

//creating a function to save our data even after reload of the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//to display the data whenever we open the browser again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();