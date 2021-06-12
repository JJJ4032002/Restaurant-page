const content = document.querySelector("#content")
 import { homeDiv } from "./home";
 import {menuDiv , elementCreator} from "./menu";
 import {ContactDiv} from "./contact";
 
function nav(){
    const nav =document.createElement("nav");
    const ulist = document.createElement("ul");
    ulist.classList.add("tb-options");
    const Arr = ["Home","Menu","Contact-info"];
    Arr.forEach(function(e){
     const list = document.createElement("li");
     list.classList.add("items");
     list.textContent = e;
     ulist.appendChild(list);
    })
    nav.appendChild(ulist);
    return nav;
}

 
 

 
const navFin = nav();
// const contactDiv = contact();

window.addEventListener("load" , function(){
    content.appendChild(navFin);
content.appendChild(homeDiv);
})

navFin.addEventListener("click",function (e) {
    const select = e.target.textContent;
    if(select === "Home"){
        content.innerHTML = "";
        content.appendChild(navFin);
        content.appendChild(homeDiv);
    }
    else if(select === "Menu"){
        content.innerHTML = "";
        content.appendChild(navFin);
        content.appendChild(menuDiv);
    }
    else{
         content.innerHTML = "";
        content.appendChild(navFin);
        content.appendChild(ContactDiv);
    }
})


//content.appendChild(navFin) content.appendChild(menuDiv);
// content.appendChild(contactDiv);
 

