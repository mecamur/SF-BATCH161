import { api, LightningElement } from 'lwc';

export default class ProgressBar extends LightningElement {
    @api progressValue;
    @api progressSize;

    @api resetProgress() {
        this.progressSize = "Medium";
        this.progressValue = 50;
    }
}