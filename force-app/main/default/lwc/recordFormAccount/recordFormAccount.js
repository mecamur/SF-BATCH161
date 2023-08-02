import { LightningElement } from 'lwc';
import ACC_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordFormAccount extends LightningElement {
    recordId = "0015i00000ndaaPAAQ";
    objectName = ACC_OBJECT;
    fields = [NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELD, REVENUE_FIELD, PHONE_FIELD, WEBSITE_FIELD];

    successHandler() {
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "Account has been saved successfully!",
            variant: "success",
            mode: "sticky"
        });
        this.dispatchEvent(successToast);
    }
}