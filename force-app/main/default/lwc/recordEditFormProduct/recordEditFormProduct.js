import { LightningElement } from 'lwc';
import ECOM_OBJECT from '@salesforce/schema/Ecommerce_Product__c';
import TITLE_FIELD from '@salesforce/schema/Ecommerce_Product__c.Name';
import BRAND_FIELD from '@salesforce/schema/Ecommerce_Product__c.Brand__c';
import CATEGORY_FIELD from '@salesforce/schema/Ecommerce_Product__c.Category__c';
import PRICE_FIELD from '@salesforce/schema/Ecommerce_Product__c.Price__c';
import DESC_FIELD from '@salesforce/schema/Ecommerce_Product__c.Description__c';
import THUMBNAIL_FIELD from '@salesforce/schema/Ecommerce_Product__c.Thumbnail__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditFormProduct extends LightningElement {
    objectName = ECOM_OBJECT;
    recordId = "";
    fields = {
        title: TITLE_FIELD,
        brand: BRAND_FIELD,
        category: CATEGORY_FIELD,
        price: PRICE_FIELD,
        desc: DESC_FIELD,
        thumbnail: THUMBNAIL_FIELD
    };

    successHandler() {
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "Product record has been saved successfully!",
            variant: "success"
        });
        this.dispatchEvent(successToast);
    }
}