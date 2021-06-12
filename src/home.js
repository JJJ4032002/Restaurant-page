

  

function homePage(){
const container = document.createElement("div");
container.classList.add("container");
const headDiv = heading();
const photoDiv = resPhoto();
const endDiv = end();
container.appendChild(headDiv);
container.appendChild(photoDiv);
container.appendChild(endDiv);
return container;
}

function heading(){
    const headDiv = document.createElement("div")
    headDiv.classList.add("heading");
    const heading = document.createElement("h1");
    heading.textContent = "Aurora Restaurant";
    headDiv.appendChild(heading);
    headDiv.appendChild

    return headDiv;
}

function resPhoto(){
    const photoDiv = document.createElement("div");
    photoDiv.classList.add("res-photo");
    const imageRes  = document.createElement("img");
    imageRes.src = "./Images/restaur.jpg";
    photoDiv.appendChild(imageRes);
    const respara = document.createElement("p");
    respara.textContent = "This is a pic of our Restaurant"
    respara.classList.add("img-para");
    photoDiv.appendChild(respara);

    return photoDiv;
}


function end(){
    const end = document.createElement("div")
    end.classList.add("end");
    const endPara = document.createElement("p");
    endPara.textContent = "We will be waiting for you!"
    end.appendChild(endPara);
    return end;
}

const homeDiv = homePage();

export {homeDiv};