import { LightningElement, track } from 'lwc';

export default class TrackProperty extends LightningElement {
    @track contact = {
        name: "Balakrishna",
        title: "Developer"
    };

    changeHandler(event) {
        this.contact.title = event.target.value;
    }
}