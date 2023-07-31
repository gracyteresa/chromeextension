let array =[]
const input=document.getElementById("input-el")
const inputsave=document.getElementById("input-btn")
const ul=document.getElementById("ul-el")
const save=document.getElementById("tab-btn")
const deletes=document.getElementById("delete-btn")
const stored=JSON.parse(localStorage.getItem("array"))
if(stored){
    array=stored
    showlink(array)
}
save.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
array.push(tabs[0].url)
localStorage.setItem("array",JSON.stringify(array))
showlink(array)
    })
})
inputsave.addEventListener("click",function(){
    array.push(input.value)
    input.value=" "
    localStorage.setItem("array",JSON.stringify(array))
    showlink(array)

})


function showlink(array){
    ul.innerHTML=" "
    for(let i=0;i<array.length;i++){
    ul.innerHTML+=`<li><a target='_blank' href='${array[i]}'>${array[i]}</a></li>`
    }

}
deletes.addEventListener("dblclick",function(){
   localStorage.clear() 
   array=[]
   showlink(array)
})