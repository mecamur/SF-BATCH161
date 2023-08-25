import { LightningElement } from 'lwc';

export default class C2pSimpleEvent extends LightningElement {
    showModal = false;
    user;

    showHandler() {
        this.showModal = true;
    }

    handleClose(event) {
        this.showModal = false;
        this.user = event.detail;
    }
}