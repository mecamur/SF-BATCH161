import { LightningElement } from 'lwc';

export default class ModalComponent extends LightningElement {

    closeHandler() {
        //Simple Event
        //const evt = new CustomEvent('close');

        //Event with data
        const message = {
            name: "Bala",
            title: "Salesforce Developer"
        };
        const evt = new CustomEvent('close', {detail: message});
        this.dispatchEvent(evt);
    }
}