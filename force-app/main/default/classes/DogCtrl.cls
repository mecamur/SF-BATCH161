public with sharing class DogCtrl {
    
    @AuraEnabled
    public static List<Dog__c> getDogs(String searchKey) {
        searchKey = '%' + searchKey + '%';
        return [SELECT Id, Name, Breed__c, Height__c, Weight__c, Life_Span__c, Image__c, Description__c, More_Info__c 
        FROM Dog__c
        WHERE Name LIKE :searchKey
        OR Breed__c LIKE :searchKey
        WITH SECURITY_ENFORCED];
    }
}
