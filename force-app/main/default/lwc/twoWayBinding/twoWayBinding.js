import { LightningElement } from 'lwc';

export default class TwoWayBinding extends LightningElement {
    fullName = "World";
    changeHandler(event) {
        this.fullName = event.target.value;
    }
}