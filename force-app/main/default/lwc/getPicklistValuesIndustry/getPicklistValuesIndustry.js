import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACC_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesIndustry extends LightningElement {

    accountRtId; //undefined
    industryOptions = [];
    selectedIndustry;

    changeHandler(event) {
        this.selectedIndustry = event.target.value;
    }

    @wire(getObjectInfo, {objectApiName: ACC_OBJECT})
    accountInfoHandler({data, error}) {
        if(data) {
            this.accountRtId = data.defaultRecordTypeId;
        }
        if(error) {
            console.error(error);
        }
    }

    @wire(getPicklistValues, {fieldApiName: INDUSTRY_FIELD, recordTypeId: '$accountRtId'})
    picklistHandler({data, error}) {
        if(data) {
            this.industryOptions = data.values;
        }
        if(error) {
            console.error(error);
        }
    }
}