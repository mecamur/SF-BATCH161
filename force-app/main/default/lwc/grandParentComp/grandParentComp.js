import { LightningElement } from 'lwc';

export default class GrandParentComp extends LightningElement {

    showHandler(event) {
        console.log("Show Event reached grant parent: c-parent-comp");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);
    }
}