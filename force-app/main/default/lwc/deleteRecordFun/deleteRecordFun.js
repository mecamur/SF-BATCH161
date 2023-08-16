import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteRecordFun extends LightningElement {
    recId;

    changeHandler(event) {
        this.recId = event.target.value;
    }

    deleteHandler() {
        //prepare recordId
        const recordId = this.recId;

        //call deleteRecord function
        deleteRecord(recordId)
            .then(result => {
                this.showToast("Success", "Record has been deleted successfully!", "success");
            })
            .catch(error => {
                console.error(error);
                this.showToast("Error", error.body.message, "error");
            })
    }

    showToast(title, message, variant) {
        const toast = new ShowToastEvent({title, message, variant});
        this.dispatchEvent(toast);
    }
}