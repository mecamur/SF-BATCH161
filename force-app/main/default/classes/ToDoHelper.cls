public with sharing class ToDoHelper {
    
    public static ToDoWrapper convertToWrapper(ToDo__c todo) {
        ToDoWrapper wrap = new ToDoWrapper();
        wrap.id = Integer.valueOf(todo.ToDo_Id__c);
        wrap.sfdc_id = todo.Id;
        wrap.completed = todo.Completed__c;
        wrap.todo = todo.Name;
        wrap.userId = Integer.valueOf(todo.User_Id__c);
        return wrap;
    }

    public static List<ToDoWrapper> convertToWrapper(List<ToDo__c> todos) {
        List<ToDoWrapper> wraps = new List<ToDoWrapper>();
        for(ToDo__c todo : todos) {
            wraps.add(convertToWrapper(todo));
        }
        return wraps;
    }

    public static ToDo__c convertToSobject(ToDoWrapper wrap) {
        ToDo__c todo = new ToDo__c();
        todo.Id = wrap.sfdc_id;
        todo.Name = wrap.todo;
        todo.Completed__c = wrap.completed;
        todo.ToDo_Id__c = wrap.id;
        todo.User_Id__c = wrap.userId;
        return todo;
    }

    public static List<ToDo__c> convertToSobject(List<ToDoWrapper> wraps) {
        List<ToDo__c> todos = new List<ToDo__c>();
        for(ToDoWrapper wrap : wraps) {
            todos.add(convertToSobject(wrap));
        }
        return todos;
    }
}