/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactDiv": () => (/* binding */ ContactDiv)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");


 function  contact() {
    const contactDiv = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.elementCreator)("div",  {className : "contaact-name"});
    const headDiv = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.elementCreator)("div" , {className : "heading"});
    const heading = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.elementCreator)("h1");
    heading.textContent = "Contact us";
    headDiv.appendChild(heading);
    contactDiv.appendChild(headDiv);
    const contactWays = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.elementCreator)("div" , {className : "res-photo"});

    const contactArr = [{classNam : "contact-para" , ide : "twitter", text : "Twitter"}, {classNam : "contact-para" , ide : "insta" , text : "Instagram"} , {classNam : "contact-para" , ide : "swiggy" , text : "Swiggy"}];

    contactArr.forEach(function (e) {
        const para = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.elementCreator)("p" , {className : e.classNam , id : e.ide});
        para.textContent = e.text;
        contactWays.appendChild(para);

    })
    contactDiv.appendChild(contactWays);



    return contactDiv;

}
const ContactDiv = contact();



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeDiv": () => (/* binding */ homeDiv)
/* harmony export */ });


  

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



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuDiv": () => (/* binding */ menuDiv),
/* harmony export */   "elementCreator": () => (/* binding */ elementCreator)
/* harmony export */ });
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






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
const content = document.querySelector("#content")
 ;
 
 
 
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
content.appendChild(_home__WEBPACK_IMPORTED_MODULE_0__.homeDiv);
})

navFin.addEventListener("click",function (e) {
    const select = e.target.textContent;
    if(select === "Home"){
        content.innerHTML = "";
        content.appendChild(navFin);
        content.appendChild(_home__WEBPACK_IMPORTED_MODULE_0__.homeDiv);
    }
    else if(select === "Menu"){
        content.innerHTML = "";
        content.appendChild(navFin);
        content.appendChild(_menu__WEBPACK_IMPORTED_MODULE_1__.menuDiv);
    }
    else{
         content.innerHTML = "";
        content.appendChild(navFin);
        content.appendChild(_contact__WEBPACK_IMPORTED_MODULE_2__.ContactDiv);
    }
})


//content.appendChild(navFin) content.appendChild(menuDiv);
// content.appendChild(contactDiv);
 


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOztBQUV4QztBQUNBLHVCQUF1QixxREFBYyxVQUFVLDRCQUE0QjtBQUMzRSxvQkFBb0IscURBQWMsVUFBVSxzQkFBc0I7QUFDbEUsb0JBQW9CLHFEQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBYyxVQUFVLHdCQUF3Qjs7QUFFeEUseUJBQXlCLDhEQUE4RCxHQUFHLCtEQUErRCxJQUFJLDZEQUE2RDs7QUFFMU47QUFDQSxxQkFBcUIscURBQWMsUUFBUSxvQ0FBb0M7QUFDL0U7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7Ozs7QUFJQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsNkJBQTZCO0FBQ3JFLGlDQUFpQyxzQkFBc0I7O0FBRXZELHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMseUJBQXlCOztBQUVwRSxtQkFBbUIsbURBQW1ELEVBQUUsMkNBQTJDLEVBQUUsNkNBQTZDLEVBQUUsOENBQThDO0FBQ2xOO0FBQ0EsOENBQThDLHdCQUF3QjtBQUN0RSwyQ0FBMkMsWUFBWTtBQUN2RCx5Q0FBeUMsdUJBQXVCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQSxvQztBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRWtDOzs7Ozs7Ozs7VUMzQ2xDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLENBQUMsQ0FBaUM7QUFDbEMsQ0FBaUQ7QUFDakQsQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUFPO0FBQzNCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBVTtBQUN0QztBQUNBLENBQUM7OztBQUdEO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVsZW1lbnRDcmVhdG9yIH0gZnJvbSBcIi4vbWVudVwiO1xuXG4gZnVuY3Rpb24gIGNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdERpdiA9IGVsZW1lbnRDcmVhdG9yKFwiZGl2XCIsICB7Y2xhc3NOYW1lIDogXCJjb250YWFjdC1uYW1lXCJ9KTtcbiAgICBjb25zdCBoZWFkRGl2ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIiAsIHtjbGFzc05hbWUgOiBcImhlYWRpbmdcIn0pO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBlbGVtZW50Q3JlYXRvcihcImgxXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjtcbiAgICBoZWFkRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoaGVhZERpdik7XG4gICAgY29uc3QgY29udGFjdFdheXMgPSBlbGVtZW50Q3JlYXRvcihcImRpdlwiICwge2NsYXNzTmFtZSA6IFwicmVzLXBob3RvXCJ9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RBcnIgPSBbe2NsYXNzTmFtIDogXCJjb250YWN0LXBhcmFcIiAsIGlkZSA6IFwidHdpdHRlclwiLCB0ZXh0IDogXCJUd2l0dGVyXCJ9LCB7Y2xhc3NOYW0gOiBcImNvbnRhY3QtcGFyYVwiICwgaWRlIDogXCJpbnN0YVwiICwgdGV4dCA6IFwiSW5zdGFncmFtXCJ9ICwge2NsYXNzTmFtIDogXCJjb250YWN0LXBhcmFcIiAsIGlkZSA6IFwic3dpZ2d5XCIgLCB0ZXh0IDogXCJTd2lnZ3lcIn1dO1xuXG4gICAgY29udGFjdEFyci5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IHBhcmEgPSBlbGVtZW50Q3JlYXRvcihcInBcIiAsIHtjbGFzc05hbWUgOiBlLmNsYXNzTmFtICwgaWQgOiBlLmlkZX0pO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gZS50ZXh0O1xuICAgICAgICBjb250YWN0V2F5cy5hcHBlbmRDaGlsZChwYXJhKTtcblxuICAgIH0pXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0V2F5cyk7XG5cblxuXG4gICAgcmV0dXJuIGNvbnRhY3REaXY7XG5cbn1cbmNvbnN0IENvbnRhY3REaXYgPSBjb250YWN0KCk7XG5cbmV4cG9ydCB7IENvbnRhY3REaXZ9OyIsIlxuXG4gIFxuXG5mdW5jdGlvbiBob21lUGFnZSgpe1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuY29uc3QgaGVhZERpdiA9IGhlYWRpbmcoKTtcbmNvbnN0IHBob3RvRGl2ID0gcmVzUGhvdG8oKTtcbmNvbnN0IGVuZERpdiA9IGVuZCgpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWREaXYpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHBob3RvRGl2KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmREaXYpO1xucmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gaGVhZGluZygpe1xuICAgIGNvbnN0IGhlYWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaGVhZERpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkF1cm9yYSBSZXN0YXVyYW50XCI7XG4gICAgaGVhZERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBoZWFkRGl2LmFwcGVuZENoaWxkXG5cbiAgICByZXR1cm4gaGVhZERpdjtcbn1cblxuZnVuY3Rpb24gcmVzUGhvdG8oKXtcbiAgICBjb25zdCBwaG90b0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGhvdG9EaXYuY2xhc3NMaXN0LmFkZChcInJlcy1waG90b1wiKTtcbiAgICBjb25zdCBpbWFnZVJlcyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlUmVzLnNyYyA9IFwiLi9JbWFnZXMvcmVzdGF1ci5qcGdcIjtcbiAgICBwaG90b0Rpdi5hcHBlbmRDaGlsZChpbWFnZVJlcyk7XG4gICAgY29uc3QgcmVzcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJlc3BhcmEudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBwaWMgb2Ygb3VyIFJlc3RhdXJhbnRcIlxuICAgIHJlc3BhcmEuY2xhc3NMaXN0LmFkZChcImltZy1wYXJhXCIpO1xuICAgIHBob3RvRGl2LmFwcGVuZENoaWxkKHJlc3BhcmEpO1xuXG4gICAgcmV0dXJuIHBob3RvRGl2O1xufVxuXG5cbmZ1bmN0aW9uIGVuZCgpe1xuICAgIGNvbnN0IGVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBlbmQuY2xhc3NMaXN0LmFkZChcImVuZFwiKTtcbiAgICBjb25zdCBlbmRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZW5kUGFyYS50ZXh0Q29udGVudCA9IFwiV2Ugd2lsbCBiZSB3YWl0aW5nIGZvciB5b3UhXCJcbiAgICBlbmQuYXBwZW5kQ2hpbGQoZW5kUGFyYSk7XG4gICAgcmV0dXJuIGVuZDtcbn1cblxuY29uc3QgaG9tZURpdiA9IGhvbWVQYWdlKCk7XG5cbmV4cG9ydCB7aG9tZURpdn07IiwiIGZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKHR5cGUscHJvcGVydGllcyl7XG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcm9wZXJ0aWVzKXtcbiAgICAgICAgZWxlW3Byb3BdID0gcHJvcGVydGllc1twcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZTtcbn1cblxuZnVuY3Rpb24gbWVudVBhZ2UoKXtcbmNvbnN0IG1lbnVDb250ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIiwge2NsYXNzTmFtZSA6IFwibWVudS1jb250YWluZXJcIn0pO1xuY29uc3QgaDEgPSBlbGVtZW50Q3JlYXRvcihcImRpdlwiLHtjbGFzc05hbWUgOiBcImhlYWRpbmdcIn0pO1xuIFxuIGNvbnN0IGhlYWRpbmcgPSBlbGVtZW50Q3JlYXRvcihcImgxXCIse30pO1xuIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhlcmUgaXMgb3VyIE1lbnVcIjtcbmgxLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xubWVudUNvbnQuYXBwZW5kQ2hpbGQoaDEpO1xuY29uc3QgbWVuSW1hZ2VzID0gbWVudUltYWdlcygpO1xubWVudUNvbnQuYXBwZW5kQ2hpbGQobWVuSW1hZ2VzKTtcblxuIHJldHVybiBtZW51Q29udDtcbn1cblxuZnVuY3Rpb24gbWVudUltYWdlcygpe1xuICAgIGNvbnN0IGl0ZW1Db250ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIix7Y2xhc3NOYW1lIDogXCJpdGVtcy1jb250XCJ9KTtcbiAgICBcbiAgICBsZXQgaW1nQXJyID0gW3tzcmMgOlwiLi9JbWFnZXMvQnJlYWtmYXN0LmpwZ1wiICwgdGV4dCA6IFwiQnJlYWtmYXN0XCJ9LHtzcmMgOiBcIi4vSW1hZ2VzL2x1bmNoLmpwZ1wiICx0ZXh0IDogXCJMdW5jaFwifSx7c3JjIDpcIi4vSW1hZ2VzL0Rpbm5lci5qcGdcIiwgdGV4dCA6IFwiRGlubmVyXCIgfSx7IHNyYyA6XCIuL0ltYWdlcy9TbmFja3MuanBnXCIgLCB0ZXh0IDogXCJTbmFja3NcIn1dO1xuICAgIGltZ0Fyci5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgY29uc3QgcGhvdG9zID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIix7Y2xhc3NOYW1lIDogXCJyZXMtcGhvdG9cIn0pO1xuICAgICAgICBsZXQgaW1nRWxlID0gZWxlbWVudENyZWF0b3IoXCJpbWdcIix7c3JjIDogZS5zcmN9KTtcbiAgICAgICAgY29uc3QgcGFyYSA9IGVsZW1lbnRDcmVhdG9yKFwicFwiLHtjbGFzc05hbWUgOiBcImltZy1wYXJhXCJ9KTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGUudGV4dDtcblxuICAgICAgICBwaG90b3MuYXBwZW5kQ2hpbGQoaW1nRWxlKVxuICAgICAgICBwaG90b3MuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgaXRlbUNvbnQuYXBwZW5kQ2hpbGQocGhvdG9zKTsgXG4gICAgfSlcbiAgICAgXG4gICAgcmV0dXJuIGl0ZW1Db250O1xuXG59XG5cbmNvbnN0IG1lbnVEaXYgPSBtZW51UGFnZSgpO1xuXG5leHBvcnQge21lbnVEaXYgLCBlbGVtZW50Q3JlYXRvcn07XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG4gaW1wb3J0IHsgaG9tZURpdiB9IGZyb20gXCIuL2hvbWVcIjtcbiBpbXBvcnQge21lbnVEaXYgLCBlbGVtZW50Q3JlYXRvcn0gZnJvbSBcIi4vbWVudVwiO1xuIGltcG9ydCB7Q29udGFjdERpdn0gZnJvbSBcIi4vY29udGFjdFwiO1xuIFxuZnVuY3Rpb24gbmF2KCl7XG4gICAgY29uc3QgbmF2ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IHVsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsaXN0LmNsYXNzTGlzdC5hZGQoXCJ0Yi1vcHRpb25zXCIpO1xuICAgIGNvbnN0IEFyciA9IFtcIkhvbWVcIixcIk1lbnVcIixcIkNvbnRhY3QtaW5mb1wiXTtcbiAgICBBcnIuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG4gICAgIGxpc3QudGV4dENvbnRlbnQgPSBlO1xuICAgICB1bGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICB9KVxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bGlzdCk7XG4gICAgcmV0dXJuIG5hdjtcbn1cblxuIFxuIFxuXG4gXG5jb25zdCBuYXZGaW4gPSBuYXYoKTtcbi8vIGNvbnN0IGNvbnRhY3REaXYgPSBjb250YWN0KCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiICwgZnVuY3Rpb24oKXtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkZpbik7XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xufSlcblxubmF2RmluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgaWYoc2VsZWN0ID09PSBcIkhvbWVcIil7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZGaW4pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuICAgIH1cbiAgICBlbHNlIGlmKHNlbGVjdCA9PT0gXCJNZW51XCIpe1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2RmluKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZGaW4pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKENvbnRhY3REaXYpO1xuICAgIH1cbn0pXG5cblxuLy9jb250ZW50LmFwcGVuZENoaWxkKG5hdkZpbikgY29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG4gXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=