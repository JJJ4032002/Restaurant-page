 function elementCreator(type,properties){
    let ele = document.createElement(type);
    for (let prop in properties){
        ele[prop] = properties[prop];
    }
    return ele;
}

function menuPage(){
const menuCont = elementCreator("div", {className : "menu-container"});
const h1 = elementCreator("div",{className : "heading"});
 
 const heading = elementCreator("h1",{});
 heading.textContent = "Here is our Menu";
h1.appendChild(heading);
menuCont.appendChild(h1);
const menImages = menuImages();
menuCont.appendChild(menImages);

 return menuCont;
}

function menuImages(){
    const itemCont = elementCreator("div",{className : "items-cont"});
    
    let imgArr = [{src :"./Images/Breakfast.jpg" , text : "Breakfast"},{src : "./Images/lunch.jpg" ,text : "Lunch"},{src :"./Images/Dinner.jpg", text : "Dinner" },{ src :"./Images/Snacks.jpg" , text : "Snacks"}];
    imgArr.forEach(function(e){
         const photos = elementCreator("div",{className : "res-photo"});
        let imgEle = elementCreator("img",{src : e.src});
        const para = elementCreator("p",{className : "img-para"});
        para.textContent = e.text;

        photos.appendChild(imgEle)
        photos.appendChild(para);
       itemCont.appendChild(photos); 
    })
     
    return itemCont;

}

const menuDiv = menuPage();

export {menuDiv , elementCreator};


