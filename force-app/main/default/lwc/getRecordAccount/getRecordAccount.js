import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

export default class GetRecordAccount extends LightningElement {

    recordId = "0015i00000ndaaPAAQ";
    name;
    type;
    industry;
    revenue;
    createdDate;
    rating;

    @wire(getRecord, {
        recordId: '$recordId',
        layoutTypes: ["Full"],
        modes: ["View"]
    }) recordHandler({data, error}) {
        if(data) {
            console.log("getRecord");
            console.log(data);
            this.name = data.fields.Name.value;
            this.type = data.fields.Type.displayValue;
            this.industry = data.fields.Industry.value;
            this.revenue = data.fields.AnnualRevenue.displayValue;
            this.createdDate = data.fields.CreatedDate.displayValue;
            this.rating = data.fields.Rating.value;
        }
        if(error) {
            console.error(error);
        }
    }
}