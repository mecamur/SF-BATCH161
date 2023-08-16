import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpdateRecordProduct extends LightningElement {

    prodId = "a015i00000ziw5wAAA";
    product;
    formdata = {};
    showValidations;
    validationMessage;

    changeHandler(event) {
        const {name, value} = event.target;
        this.formdata[name] = value;
    }

    updateHandler() {
        //data validations
        if(this.formdata && (!this.formdata.Description__c || this.formdata.Description__c == "")) {
            this.showValidations = true;
            this.validationMessage = "Please enter a valid description about the product!";
        } else {
            this.showValidations = false;
        }

        if(!this.showValidations) {
            //prepare recordInput
            const recordInput = {
                fields: this.formdata
            };

            //call update record
            updateRecord(recordInput)
                .then(result => {
                    this.showToast("Success", "Product record has been updated successfully!", "success");
                })
                .catch(error => {
                    this.showToast("Error", "Error while updating the product record!", "error");
                })
        }        
    }

    showToast(title, message, variant) {
        const toast = new ShowToastEvent({title, message, variant});
        this.dispatchEvent(toast);
    }

    @wire(getRecord, {
        recordId: '$prodId',
        layoutTypes: ['Full'],
        modes: ['Edit']
    }) productHandler({data, error}) {
        if(data) {
            this.product = data;
            this.formdata["Id"] = this.prodId;
            this.formdata["Name"] = this.product.fields.Name.value;
            this.formdata["Brand__c"] = this.product.fields.Brand__c.value;
            this.formdata["Category__c"] = this.product.fields.Category__c.value;
            this.formdata["Description__c"] = this.product.fields.Description__c.value;
        }
    }
}