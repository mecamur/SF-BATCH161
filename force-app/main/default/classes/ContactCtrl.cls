public with sharing class ContactCtrl {
    @AuraEnabled
    public static List<Contact> searchContacts(String searchKey) {
        searchKey = '%' + searchKey + '%';
        return [SELECT Id, Name, Title, Department, Email
        FROM Contact
        WHERE Name LIKE :searchKey
        WITH SECURITY_ENFORCED];
    }
}