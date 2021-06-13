import { elementCreator } from "./menu";

 function  contact() {
    const contactDiv = elementCreator("div",  {className : "contact-name"});
    const headDiv = elementCreator("div" , {className : "heading"});
    const heading = elementCreator("h1");
    heading.textContent = "Contact us";
    headDiv.appendChild(heading);
    contactDiv.appendChild(headDiv);
    const contactWays = elementCreator("div" , {className : "res-photo"});

    const contactArr = [{classNam : "contact-para" , ide : "twitter", text : "Twitter"}, {classNam : "contact-para" , ide : "insta" , text : "Instagram"} , {classNam : "contact-para" , ide : "swiggy" , text : "Swiggy"}];

    contactArr.forEach(function (e) {
        const para = elementCreator("p" , {className : e.classNam , id : e.ide});
        para.textContent = e.text;
        contactWays.appendChild(para);

    })
    contactDiv.appendChild(contactWays);



    return contactDiv;

}
const ContactDiv = contact();

export { ContactDiv};