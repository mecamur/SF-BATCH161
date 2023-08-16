import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import STND_FIELD from '@salesforce/schema/Student__c.Standard__c';
import STD_OBJECT from '@salesforce/schema/Student__c';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreatedRecordStudent extends LightningElement {

    standardOptions = [];
    formdata = {};
    validationMessage;
    isWarning;
    isHappy;

    changeHandler(event) {
        const {name, value} = event.target;
        this.formdata[name] = value;
    }

    cancelHandler() {
        this.template.querySelector('form.studentform').reset();
        this.formdata = {};
        this.showToast("Info", "Form has been erased!", "info");
    }

    saveHandler() {
        //validation checks
        if(this.formdata && !this.formdata.Name__c) {
            this.isWarning = true;
            this.validationMessage = "Name is mandatory!";
        } else if(this.formdata && !this.formdata.Standard__c) {
            this.isWarning = true;
            this.validationMessage = "Standard is mandatory!";
        } else {
            this.isWarning = false;
        }
        if(this.formdata.Phone__c) {
            this.isHappy = true;
        } else {
            this.isHappy = false;
        }

        //populate Category
        if(this.formdata.Standard__c) {
            if(this.formdata.Standard__c <= 5) {
                this.formdata["Category__c"] = "Primary";
            } else {
                this.formdata["Category__c"] = "Upper Primary";
            }            
        }

        //Populate Score Percentage
        if(this.formdata.Score_of_500__c) {
            this.formdata["Score__c"] = this.formdata.Score_of_500__c/5;
        }

        //Populate Rank
        if(this.formdata.Score__c) {
            if(this.formdata.Score__c >= 90) {
                this.formdata["Rank__c"] = "Distinction";
            } else if(this.formdata.Score__c >= 80) {
                this.formdata["Rank__c"] = "Top Rank";
            } else if(this.formdata.Score__c >= 70) {
                this.formdata["Rank__c"] = "Medium Rank";
            } else {
                this.formdata["Rank__c"] = "Need to Improve";
            }
        }

	if(!this.isWarning) {
        //prepare recordInput
        const recordInput = {
            apiName: STD_OBJECT.objectApiName,
            fields: this.formdata
        };

        createRecord(recordInput)
            .then(result => {
                this.showToast("Success", "Student record has been created successfully!", "success");
            })
            .catch(error => {
                console.error(error);
                this.showToast("Error", "Error occurred while creating the student record!", "error");
            })
	    }
    }

    showToast(title, message, variant) {
        const toast = new ShowToastEvent({title, message, variant});
        this.dispatchEvent(toast);
    }

    @wire(getObjectInfo, {
        objectApiName: STD_OBJECT
    }) studentInfo;

    @wire(getPicklistValues, {
        fieldApiName: STND_FIELD,
        recordTypeId: '$studentInfo.data.defaultRecordTypeId'
    }) picklistHandler({data, error}) {
        if(data) {
            this.standardOptions = data.values;
        }
        if(error) {
            console.error(error);
        }
    }
}