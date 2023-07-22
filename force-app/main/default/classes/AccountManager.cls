@RestResource(urlMapping='/Account/*') 
global with sharing class AccountManager {
    //https://sfdev14-dev-ed.trailblaze.my.salesforce.com/services/apexrest/Account/*
    //https://sfdev14-dev-ed.trailblaze.my.salesforce.com/services/apexrest/Account/
    //https://sfdev14-dev-ed.trailblaze.my.salesforce.com/services/apexrest/Account/0015i00000ndaaPAAQ
    //https://sfdev14-dev-ed.trailblaze.my.salesforce.com/services/apexrest/Account/abcdefghi
    //https://sfdev14-dev-ed.trailblaze.my.salesforce.com/services/apexrest/Account/abc

    @HttpGet
    global static Account getAccount() {
        //Grab the account id from the url, query for the same and return the data
        RestRequest request = RestContext.request;
        String endpoint = request.requestURI;
        Integer lastIndex = endpoint.lastIndexOf('/');
        String accId = endpoint.substring(lastIndex+1);
        if(accId.length() == 18 || accId.length() == 15) {
            Account acc = [SELECT Id, Name, Type, Industry, AnnualRevenue, Phone, Website FROM Account WHERE Id = :accId];
            return acc;
        }
        return null;
    }

    @HttpPost
    global static Id postAccount(String Name, String Type, String Industry, Integer AnnualRevenue, String Phone, String Website) {
        Account acc = new Account();
        acc.Name = Name;
        acc.Type = Type;
        acc.Industry = Industry;
        acc.AnnualRevenue = AnnualRevenue;
        acc.Phone = Phone;
        acc.Website = Website;
        insert acc;
        return acc.Id;
    }

    @HttpDelete
    global static String deleteAccount() {
        RestRequest request = RestContext.request;
        String endpoint = request.requestURI;
        Integer lastIndex = endpoint.lastIndexOf('/');
        String accId = endpoint.substring(lastIndex+1);
        if(accId.length() == 18 || accId.length() == 15) {
            Account acc = [SELECT Id FROM Account WHERE Id = :accId];
            try {
                delete acc;
                return 'Success';
            } catch(Exception ex) {
                return 'Fail';
            }
        }
        return 'Fail';
    }
    
    @HttpPut
    global static Account putAccount() {
        //Grab the request body and upsert the same
        RestRequest request = RestContext.request;
        String jsonString = request.requestBody.toString();
        Account acc = (Account)JSON.deserialize(jsonString, Account.class);
        upsert acc; //inserts if there is no id in the json, else updates
        return [SELECT Id, Name, Type, Industry, AnnualRevenue, Phone, Website FROM Account WHERE Id = :acc.Id LIMIT 1];
    }

    @HttpPatch
    global static Account patchAccount() {
        //Grab the request body and covert it to account
        RestRequest request = RestContext.request;
        String jsonString = request.requestBody.toString();
        Map<String,Object> info = (Map<String,Object>)JSON.deserializeUntyped(jsonString);
        Account acc = new Account();
        for(String key : info.keySet()) {
            acc.put(key, info.get(key));
        }
        update acc;
        return [SELECT Id, Name, Type, Industry, AnnualRevenue, Phone, Website FROM Account WHERE Id = :acc.Id LIMIT 1];
    }

}