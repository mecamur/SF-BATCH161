public with sharing class ProductHandler {
    public static Product__c convertToSobject(ProductWrapper pw) {
        Product__c prod = new Product__c();
        prod.Name = pw.title;
        prod.Product_Id__c = pw.id;
        prod.Description__c = pw.description;
        prod.Price__c = pw.price;
        prod.Discount_Percentage__c = pw.discountPercentage;
        prod.Rating__c = pw.rating;
        prod.Stock__c = pw.stock;
        prod.Brand__c = pw.brand;
        prod.Category__c = pw.category;
        prod.Thumbnail__c = pw.thumbnail;
        return prod;
    }
}
