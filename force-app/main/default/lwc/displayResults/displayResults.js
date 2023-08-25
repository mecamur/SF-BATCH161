import { api, LightningElement } from 'lwc';

export default class DisplayResults extends LightningElement {
    @api records;
    @api columns;
    @api errors;
}