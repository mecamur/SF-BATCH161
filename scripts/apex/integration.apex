//Why we need type casting in deserilize method?
//Type Casting: 
Map<String,Object> info = new Map<String,Object>();
info.put('Rank', 20);
info.put('Name', 'Balakrishna');
info.put('Live At', 'India');
info.put('Salary', 100.50);

String name = (String)info.get('Name');
System.debug(name);

//How to decide which method to use, between deserialize and deserialize untyped?
//Wrapper class: 
//deserialize: If you have a wrapper class or sobject into which you want to convert your JSON, then you can use it.
//deserializeUntyped: Map<String,Object>: Untyped - If you want to convert your JSON into a map of string, object, then you can use it.


//In real world scenarios what is mainly done with the data that we get from third party system?
//CRUD Operations: Create (GET), Read, Update & Delete

//Is platform event built in integration, if so what is the benefits and limitations compared to REST and SOAP?
Event Bus:
Subscriber - A guy wants to receive messages from the Event Bus (N)
Publisher - A guy who wants to publish messages into Event Bus (N)

Benefits:
1. You dont need to build point to point integrations. Hence, you can save dollars.
2. High Volume & Secured. Per Hour = 50,000 => Per Min = 833 => Per Sec = 13
3. Fire & Forget
4. 72 hours.

Limitations:
1. Fire & Forget: If you need a confirmation that if 3rd party system has received it or not, you dont have a way. 

Integration Approaches. How to decide which pattern to pickup?
Integration Patterns?


///
RestCallouts.getProduct();