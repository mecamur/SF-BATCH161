import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {

    showHandler1(event) {
        console.log("Show Event reached parent: c-child-comp");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);
    }

    showHandler2(event) {
        console.log("Show Event reached parent: div");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);
    }
}