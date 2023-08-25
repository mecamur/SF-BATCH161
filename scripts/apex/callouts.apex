//Input Email = 'test@test.com'

//1. Prepare HttpRequest & wrap all the necessary data in it
HttpRequest request = new HttpRequest();
request.setEndpoint('endpoint');
request.setMethod('POST');

Contact con = [SELECT Name, Title, Company FROM Contact WHERE Email = 'test@test.com'];
//create a wrapper
//convert con to wrapper
String jsonString = JSON.serialize(conWrapper);