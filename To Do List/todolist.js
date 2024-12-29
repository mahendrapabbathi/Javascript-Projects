

const searchInput=document.getElementById('input-box');
const searchButton=document.getElementById('button');
const searchResult=document.getElementById('list-container');

function displayList(){
    searchButton.addEventListener("click",()=>{
        if(searchInput.value === ""){
            alert("You should enter something!");
        }
        else{
            let li=document.createElement("li");
            li.innerHTML=searchInput.value;
            searchResult.appendChild(li);
            searchInput.value="";
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }

        saveData();

    })
}

searchResult.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",searchResult.innerHTML);
}

function showTask(){    //when reopen the browser it never gone
    searchResult.innerHTML=localStorage.getItem("data");
}

displayList();
showTask();