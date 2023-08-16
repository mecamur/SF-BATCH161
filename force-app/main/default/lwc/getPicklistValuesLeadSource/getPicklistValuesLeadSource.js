import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LS_FIELD from '@salesforce/schema/Contact.LeadSource';

export default class GetPicklistValuesLeadSource extends LightningElement {

    vendorRtId;
    leadSourceOptions = [];

    @wire(getObjectInfo, {objectApiName: CONTACT_OBJECT})
    objectInfoHandler({data, error}) {
        if(data) {
            console.log(data);
            const rtids = data.recordTypeInfos;
            console.log(JSON.stringify(Object.keys(rtids)));
            this.vendorRtId = Object.keys(rtids).find(rtid => rtids[rtid].name === 'Vendor Contact');
        }
        if(error) {
            console.error(error);
        }
    }

    @wire(getPicklistValues, {fieldApiName: LS_FIELD, recordTypeId:'$vendorRtId'})
    picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.leadSourceOptions = data.values;
        }
        if(error) {
            console.error(error);
        }
    }
}