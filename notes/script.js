let btn = document.getElementById("btn");
let area = document.getElementsByClassName("main-text")[0]
let note;
function savedata(){
    localStorage.setItem("data1",area.innerHTML)
}
function getData(){
   area.innerHTML = localStorage.getItem("data1")
}
getData()
btn.addEventListener("click",function(){
    let para = document.createElement("p")
    para.setAttribute("contenteditable","true")
    para.className = "notearea";
    para.innerText="Enter note"
    let imgg = document.createElement("img");
    imgg.src="images/trash-can.png"
    area.appendChild(para).appendChild(imgg);
})

area.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        savedata();
    }else if(e.target.tagName==="P")
    {
        note = document.querySelectorAll(".notearea")
        note.forEach(element => {
            element.onkeyup = function(){
                savedata();
            }
        });
    }
})