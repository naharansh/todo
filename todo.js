const input=document.querySelector("#input")
const list=document.querySelector("#data")
input.addEventListener("keyup",(e)=>{
  if (e.key == "Enter") {
        console.log(input.value)
        create(input.value);
        input.value="";
  } 
})
const create=(item)=>{
 const data=document.createElement("li");
 data.innerHTML=`${item}<span class="mdi mdi-alpha-x"></span>`;
 list.appendChild(data)
    data.querySelector("span").addEventListener("click",()=>{
        data.remove();
    })
    data.addEventListener("click",()=>{
        data.classList.toggle("done")
    })
}