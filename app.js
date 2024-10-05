let add=document.querySelector("#add")
let list=document.querySelector("#tasks")
let task=document.querySelector("#text")


add.addEventListener("click",function (event)
{
    let task=document.querySelector("#text")
    let li=document.createElement("li")
    let btn=document.createElement("button")
    btn.className="delete"
    btn.innerHTML="Delete"
    console.log("button clicked")
    li.innerText=task.value; 
    task.value=""
    li.appendChild(btn)
    list.appendChild(li)
}
)
list.addEventListener("click",function (event){
    console.log("delete triggered")
   if(event.target.className=="delete")
   {
    event.target.parentElement.remove()
   }
})

task.addEventListener("keypress",function ()
{
    console.log("Enter")
     if(event.key=="Enter")
    add.click()
})




