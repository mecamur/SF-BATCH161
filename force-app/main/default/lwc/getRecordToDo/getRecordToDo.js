import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

export default class GetRecordToDo extends LightningElement {

    toDoId = "a035i00000C9fUPAAZ";

    @wire(getRecord, {
        recordId: '$toDoId',
        layoutTypes: ["Full"],
        modes: ["Edit"]
    }) toDo;
}