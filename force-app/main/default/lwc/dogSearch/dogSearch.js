import getDogs from '@salesforce/apex/DogCtrl.getDogs';
import { LightningElement } from 'lwc';

export default class DogSearch extends LightningElement {

    searchWord;
    dogs;
    error;

    changeHandler(event) {
        this.searchWord = event.target.value;
    }

    handleSearch() {
        getDogs({searchKey: this.searchWord})
            .then(result => {
                this.dogs = result;
            })
            .catch(error => {
                this.error = error;
            })
    }
}