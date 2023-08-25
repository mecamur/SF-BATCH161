import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import getAccountsByIndustry from '@salesforce/apex/AccountCtrl.getAccountsByIndustry';

const COLUMNS = [
    {label: "Account Name", fieldName: "Name", type: "text"},
    {label: "Type", fieldName: "Type", type: "text"},
    {label: "Industry", fieldName: "Industry", type: "text"},
    {label: "Annual Revenue", fieldName: "AnnualRevenue", type: "currency"}
];

export default class AccountsByIndustry extends LightningElement {

    industryOptions = [];
    accounts;
    columns = COLUMNS;
    error = "Please select an industry!";

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    accountInfo;

    @wire(getPicklistValues, {
        fieldApiName: INDUSTRY_FIELD,
        recordTypeId: '$accountInfo.data.defaultRecordTypeId'
    }) picklistHandler({data, error}) {
        if(data) {
            this.industryOptions = data.values;
        }
    }

    changeHandler(event) {
        const selectedIndutry = event.target.value;
        getAccountsByIndustry({industry: selectedIndutry})
            .then(result => {
                if(result.length > 0) {
                    this.accounts = result;
                    this.error = undefined;
                } else {
                    this.error = "There are no accounts belong to the chosen industry";
                    this.accounts = undefined;
                }                
            })
            .catch(error => {
                this.error = error;
                this.accounts = undefined;
            })
    }
}