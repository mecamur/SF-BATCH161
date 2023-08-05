import { LightningElement } from 'lwc';
import TODO_OBJECT from '@salesforce/schema/ToDo__c';
import NAME_FIELD from '@salesforce/schema/ToDo__c.Name';
import TODO_ID_FIELD from '@salesforce/schema/ToDo__c.ToDo_Id__c';
import USER_ID_FIELD from '@salesforce/schema/ToDo__c.User_Id__c';
import COMPLETED_FIELD from '@salesforce/schema/ToDo__c.Completed__c';

export default class RecordViewFormToDo extends LightningElement {
    objectName = TODO_OBJECT;
    recordId = "a035i00000C9fUPAAZ";
    fields = {
        todo: NAME_FIELD,
        id: TODO_ID_FIELD,
        userId: USER_ID_FIELD,
        status: COMPLETED_FIELD
    };
}