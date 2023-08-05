import { LightningElement } from 'lwc';
import AIRLINES_OBJECT from '@salesforce/schema/Airlines__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordFormAirlines extends LightningElement {
    objectName = AIRLINES_OBJECT;
    recordId = "";

    successHandler() {
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "Airlines record has been saved successfully!",
            variant: "success"
        });
        this.dispatchEvent(successToast);
    }
}