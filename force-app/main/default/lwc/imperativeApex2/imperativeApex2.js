import searchContacts from '@salesforce/apex/ContactCtrl.searchContacts';
import { LightningElement } from 'lwc';

const COLUMNS = [
    {label: "Contact Name", fieldName: "Name", type: "text"},
    {label: "Title", fieldName: "Title", type: "text"},
    {label: "Department", fieldName: "Department", type: "text"},
    {label: "Email", fieldName: "Email", type: "email"}
];

export default class ImperativeApex2 extends LightningElement {
    searchWord;
    contacts;
    message = "Please start entering some key words in order to find the matching contacts";
    columns = COLUMNS;

    changeHandler(event) {
        this.searchWord = event.target.value;
        if(this.searchWord.length > 0) {
            //call apex
            searchContacts({searchKey: this.searchWord})
                .then(result => {
                    if(result.length > 0) {
                        this.contacts = result;
                        this.message = undefined;
                    } else {
                        this.contacts = undefined;
                        this.message = "There are no matching contacts for the entered criteria. Please try refining your search!";
                    }
                })
                .catch(error => {
                    this.message = "Error occurred while searching for matching contacts!";
                    this.contacts = undefined;
                })
        } else {
            this.contacts = undefined;
            this.message = "Please start entering some key words in order to find the matching contacts";
        }
        
    }
}