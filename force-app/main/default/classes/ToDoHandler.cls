public with sharing class ToDoHandler {
    public static void afterInsert(Map<Id,ToDo__c> newToDos) {
        for(Id toDoId : newToDos.keySet()) {
            RestCallouts.postToDo(toDoId);
        }
    }

    public static void afterUpdate(Map<Id,ToDo__c> newToDos, Map<Id,ToDo__c> oldToDos) {
        for(Id toDoId : newToDos.keySet()) {
            ToDo__c newToDo = newToDos.get(toDoId); //new version of sobject data
            ToDo__c oldToDo = oldToDos.get(toDoId); //old version of sobject data
            if(newToDo.Name != oldToDo.Name || newToDo.Completed__c != oldToDo.Completed__c || newToDo.User_Id__c != oldToDo.User_Id__c) {
                RestCallouts.updateToDo(toDoId);
            }
        }
    }

    public static void afterDelete(Map<Id,ToDo__c> oldToDos) {
        for(Id toDoId : oldToDos.keySet()) {
            Integer tdId = Integer.valueOf(oldToDos.get(toDoId).ToDo_Id__c);
            RestCallouts.deleteToDo(tdId);
        }
    }
}