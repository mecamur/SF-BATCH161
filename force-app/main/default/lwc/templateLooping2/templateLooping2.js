import { LightningElement } from 'lwc';

export default class TemplateLooping2 extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: "Satya Nadella",
            Company: "Microsoft",
            Title: "Chief Executive Officer",
            Stay: "United States"
        },
        {
            Id: 2,
            Name: "Sundar Pichai",
            Company: "Google",
            Title: "Chief Executive Officer",
            Stay: "United States"
        },
        {
            Id: 3,
            Name: "Jeff Bezos",
            Company: "Salesforce",
            Title: "Chief Executive Officer",
            Stay: "United States"
        },
        {
            Id: 4,
            Name: "Andy Jassy",
            Company: "Amazon",
            Title: "Chief Executive Officer",
            Stay: "United States"
        }
    ];
}