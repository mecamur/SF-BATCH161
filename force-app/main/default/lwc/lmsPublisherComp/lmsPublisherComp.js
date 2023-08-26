import { MessageContext, publish } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import SI_CHANNEL from '@salesforce/messageChannel/SoftInnovas__c';

export default class LmsPublisherComp extends LightningElement {

    messageInput;

    @wire(MessageContext)
    context;

    changeHandler(event) {
        this.messageInput = event.target.value;
    }

    publishHandler() {
        //prepare the message
        const message = {
            lmsdata: this.messageInput
        };

        //publish the message
        publish(this.context, SI_CHANNEL, message);
    }
}