import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordAccount extends LightningElement {

    typeOptions = [];
    industryOptions = [];
    formdata = {};
    isHighRevenue = false;

    //build an account record with inputted data
    changeHandler(event) {
        //const name = event.target;
        //const value = event.target;
        const {name, value} = event.target;
        this.formdata[name] = value;
        console.log(JSON.stringify(this.formdata));
        if(name=="AnnualRevenue" && value >= 10000000) {
            this.isHighRevenue = true;
        } else {
            this.isHighRevenue = false;
        }
    }

    //clear the form
    cancelHandler() {
        this.template.querySelector("form").reset();
        this.formdata = {};
    }

    //create a brand new record
    saveHandler() {
        //populate rating & customer priority based on annual revenue
        if(this.formdata.AnnualRevenue && this.formdata.AnnualRevenue >= 10000000) {
            this.formdata["Rating"] = "Hot";
            this.formdata["CustomerPriority__c"] = "High";
        }
        //prepare recordInput
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields: this.formdata
        };

        //create account record
        createRecord(recordInput)
            .then(result => {
                console.log(result);
                this.showToast("Success", "Account record has been created successfully!", "success");
                this.cancelHandler();
            })
            .catch(error => {
                console.error(error);
                this.showToast("Error", "Error occurred while creating account record", "error");
            })
    }

    showToast(title, message, variant) {
        const toast = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(toast);
    }

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    accountInfo;

    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT,
        recordTypeId: '$accountInfo.data.defaultRecordTypeId'
    }) picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.typeOptions = data.picklistFieldValues.Type.values;
            this.industryOptions = data.picklistFieldValues.Industry.values;
        }
        if(error) {
            console.error(error);
        }
    }
}