import { LightningElement } from 'lwc';

export default class AboutMe extends LightningElement {
    inputVal = "there";
    changeHandler(event) {
        this.inputVal = event.target.value;
    }
}