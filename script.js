
    var listcontainer=document.getElementById("list-container")
    var input=document.getElementById("input")
    
    function addTask(){
     //creating list
      var listiteam=document.createElement("li")
      //creating checkbox
      var checkbox = document.createElement("input")
      checkbox.type="checkbox"
      checkbox.onclick=function(){
        if(checkbox.checked){
            listiteam.style.textDecoration ="line-through"
        }
        else{
            listiteam.style.textDecoration="none"
        }
    }
        // text create 
        var span=document.createElement("span")
        span.textContent=input.value
        //delete button
        var deletebutton=document.createElement("button")
        deletebutton.innerHTML="🗑️"
          deletebutton.onclick=function(event){
        event.target.parentElement.remove()
          }
          //li la add
          listiteam.append(checkbox)
          listiteam.append(span)
          listiteam.append(deletebutton)
          //ul add
          listcontainer.append(listiteam)
        }
        var listcontainer = document.getElementById("list-container")
var input = document.getElementById("input")

// Page load ஆனப்போ saved tasks load பண்ணு
window.onload = function() {
    var saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(function(task) {
        createTask(task.text, task.done);
    });
}

// Tasks save பண்ற function
function saveTasks() {
    var tasks = [];
    document.querySelectorAll("#list-container li").forEach(function(li) {
        tasks.push({
            text: li.querySelector("span").textContent,
            done: li.querySelector("input").checked
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask(text, done) {
    var listiteam = document.createElement("li")
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = done || false
    checkbox.onclick = function() {
        if (checkbox.checked) {
            listiteam.style.textDecoration = "line-through"
        } else {
            listiteam.style.textDecoration = "none"
        }
        saveTasks();
    }
    if (done) listiteam.style.textDecoration = "line-through"

    var span = document.createElement("span")
    span.textContent = text

    var deletebutton = document.createElement("button")
    deletebutton.innerHTML = "🗑️"
    deletebutton.onclick = function(event) {
        event.target.parentElement.remove()
        saveTasks();
    }

    listiteam.append(checkbox)
    listiteam.append(span)
    listiteam.append(deletebutton)
    listcontainer.append(listiteam)
}

function addTask() {
    if (input.value === "") return;
    createTask(input.value, false);
    saveTasks();
    input.value = "";
}