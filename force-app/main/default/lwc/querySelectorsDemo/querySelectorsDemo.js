import { LightningElement } from 'lwc';

export default class QuerySelectorsDemo extends LightningElement {

    fruits = ["Apple", "Banana", "Orange", "Grape", "Dragon"];

    clickHandler() {
        //h1 element
        const h1elem = this.template.querySelector("h1");
        console.log(h1elem.innerText);
        h1elem.style.color = "#337524";
        h1elem.style.background = "#dcfcca"
        h1elem.style.border = "2px solid green";
        h1elem.style.textAlign = "center";

        //p element
        const pelem = this.template.querySelector("p");
        console.log(pelem.innerText);
        pelem.style.color = "#15386b";
        pelem.style.background = "#c4d7f2"
        pelem.style.border = "2px solid blue";

        //div => fruit elements
        const divelems = this.template.querySelectorAll("div.fruit");
        divelems.forEach(item => {
            console.log(item.innerText);
            item.style.border = "2px solid yellow";
            item.setAttribute("class", "slds-align_absolute-center");
        })
        
    }
}