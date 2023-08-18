public with sharing class OpportunityCtrl {
    
    @AuraEnabled
    public static List<Opportunity> getOppsByStage(String stage) {
        return [SELECT Id, Name, Type, StageName, Amount
        FROM Opportunity
        WHERE StageName = :stage
        WITH SECURITY_ENFORCED];
    }
}
