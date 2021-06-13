import { elementCreator } from "./menu";

  

function homePage(){
const container = elementCreator("div" , {className : "container"});
 
const headDiv = heading();
const photoDiv = resPhoto();
const endDiv = end();
container.appendChild(headDiv);
container.appendChild(photoDiv);
container.appendChild(endDiv);
return container;
}

function heading(){
    const headDiv = elementCreator("div" , {className : "heading"});
    const heading = document.createElement("h1");
    heading.textContent = "Aurora Restaurant";
    headDiv.appendChild(heading);
    headDiv.appendChild

    return headDiv;
}

function resPhoto(){
    const photoDiv = elementCreator("div", {className : "res-photo"})
    
    const imageRes  = elementCreator("img", {src : "./Images/restaur.jpg"})
    
    photoDiv.appendChild(imageRes);
    const respara = elementCreator("p" , {className : "img-para"});
    respara.textContent = "This is a pic of our Restaurant"
    
    photoDiv.appendChild(respara);

    return photoDiv;
}


function end(){
    const end = elementCreator("div" , {className : "end"});
    const endPara = document.createElement("p");
    endPara.textContent = "We will be waiting for you!"
    end.appendChild(endPara);
    return end;
}

const homeDiv = homePage();

export {homeDiv};