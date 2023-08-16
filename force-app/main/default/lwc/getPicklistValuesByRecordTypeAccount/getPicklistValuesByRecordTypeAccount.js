import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesByRecordTypeAccount extends LightningElement {

    industryOptions = [];
    typeOptions = [];
    ratingOptions = [];

    selectedIndustry;
    selectedType;
    selectedRating;

    changeHandler(event) {
        const name = event.target.name;
        if(name === "Industry") {
            this.selectedIndustry = event.target.value;
        } else if(name === "Type") {
            this.selectedType = event.target.value;
        } else {
            this.selectedRating = event.target.value;
        }
    }

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    accountInfo;

    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT,
        recordTypeId: '$accountInfo.data.defaultRecordTypeId'
    }) picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.industryOptions = data.picklistFieldValues.Industry.values;
            this.typeOptions = data.picklistFieldValues.Type.values;
            this.ratingOptions = data.picklistFieldValues.Rating.values;
        }
        if(error) {
            console.error(error);
        }
    }
}