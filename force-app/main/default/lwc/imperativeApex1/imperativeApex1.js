import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import OPP_OBJECT from '@salesforce/schema/Opportunity';
import getOppsByStage from '@salesforce/apex/OpportunityCtrl.getOppsByStage';

const COLUMNS = [
    {label: "Opp Name", fieldName: "Name", type: "text"},
    {label: "Type", fieldName: "Type", type: "text"},
    {label: "Stage", fieldName: "StageName", type: "text"},
    {label: "Amount", fieldName: "Amount", type: "currency"}
];

export default class ImperativeApex1 extends LightningElement {

    stageOptions = [];
    selectedStage;
    opps;
    info = "Select a stage in order to see the opportunities belong to that stage!";
    columns = COLUMNS;

    changeHandler(event) {
        this.selectedStage = event.target.value;

        //call apex
        getOppsByStage({stage: this.selectedStage})
            .then(result => {
                this.opps = result;
            })
            .catch(error => {
                this.error = "Error occurred while fetching the opportunities!";
            })
            
    }

    @wire(getObjectInfo, {objectApiName: OPP_OBJECT})
    oppInfo;

    @wire(getPicklistValues, {
        fieldApiName: STAGE_FIELD,
        recordTypeId: '$oppInfo.data.defaultRecordTypeId'
    }) picklistHandler({data, error}) {
        if(data) {
            this.stageOptions = data.values;
        }
        if(error) {
            console.error(error);
        }
    }
}