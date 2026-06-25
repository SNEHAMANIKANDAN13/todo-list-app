
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
        