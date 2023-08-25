import { api, LightningElement } from 'lwc';

export default class P2cPrimitivesChild2 extends LightningElement {
    @api productName;
    @api category;
    @api price;
}