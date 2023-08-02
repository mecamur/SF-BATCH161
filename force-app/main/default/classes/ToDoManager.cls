@RestResource(urlMapping='/todo/*')
global with sharing class ToDoManager {
    //https://sfdev14-dev-ed.trailblaze.my.salesforce.com/services/apexrest/todo/*

    @HttpGet
    global static List<ToDoWrapper> getToDos() {
        List<ToDo__c> todos = [SELECT Name, ToDo_Id__c, Completed__c, User_Id__c FROM ToDo__c];
        List<ToDoWrapper> wraps = ToDoHelper.convertToWrapper(todos);
        return wraps;
    }

    @HttpPost
    global static List<ToDoWrapper> postToDos() {
        //Grab the request body
        RestRequest request = RestContext.request;
        String jsonString = request.requestBody.toString();

        //Convert jsonString to wrappers
        List<ToDoWrapper> wraps = (List<ToDoWrapper>)JSON.deserialize(jsonString, List<ToDoWrapper>.class);

        //Convert wrappers to sobjects
        List<ToDo__c> todos = ToDoHelper.convertToSobject(wraps);
        insert todos;
        return ToDoHelper.convertToWrapper(todos);
    }
}