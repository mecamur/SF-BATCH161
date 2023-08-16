import getAccountsByType from '@salesforce/apex/AccountCtrl.getAccountsByType';
import { LightningElement, wire } from 'lwc';

export default class WiredApex2 extends LightningElement {

    selectedType = "Customer - Direct";
    accounts;

    @wire(getAccountsByType, {type: '$selectedType'})
    accountsHandler({data, error}) {
        if(data) {
            this.accounts = data;
        }
        if(error) {
            console.error(error);
        }
    }
}