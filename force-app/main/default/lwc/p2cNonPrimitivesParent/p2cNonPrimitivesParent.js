import { LightningElement } from 'lwc';

export default class P2cNonPrimitivesParent extends LightningElement {
    carousels = [
        {
            src: "https://t4.ftcdn.net/jpg/03/03/62/45/360_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg",
            header: "First Card",
            description: "First card description.",
            alternativeText: "First card accessible description.",
            href: "javascript:void(0);"
        },
        {
            src: "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
            header: "Second Card",
            description: "Second card description.",
            alternativeText: "Second card accessible description.",
            href: "javascript:void(0);"
        },
        {
            src: "https://sketchok.com/images/articles/01-cartoons/000-va/93/11.jpg",
            header: "Third Card",
            description: "Third card description.",
            alternativeText: "Third card accessible description.",
            href: "javascript:void(0);"
        }
    ];
}