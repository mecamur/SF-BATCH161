@isTest
public with sharing class RestCalloutsMock implements HttpCalloutMock {
    public HttpResponse respond(HttpRequest request) {
        //get animals mock
        if(request.getEndpoint() == 'https://th-apex-http-callout.herokuapp.com/animals' && request.getMethod() == 'GET') {
            HttpResponse response = new HttpResponse();
            response.setStatus('OK');
            response.setStatusCode(200);
            String body = '{"animals":["majestic badger","fluffy bunny","scary bear","chicken"]}';
            response.setBody(body);
            return response;
        }
        //get products mock
        else if(request.getEndpoint() == 'https://dummyjson.com/products' && request.getMethod() == 'GET') {
            HttpResponse response = new HttpResponse();
            response.setStatus('OK');
            response.setStatusCode(200);
            String body = '{"products":[{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"]}],"total":100,"skip":0,"limit":30}';
            response.setBody(body);
            return response;
        }
        //get airlines mock
        else if(request.getEndpoint().contains('https://api.instantwebtools.net/v1/airlines/') && request.getMethod() == 'GET') {
            HttpResponse response = new HttpResponse();
            response.setStatusCode(200);
            response.setStatus('OK');
            String body = '{"id":1,"name":"Sri Lankan Airways","country":"Sri Lanka","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png","slogan":"From Sri Lanka","head_quaters":"Katunayake, Sri Lanka","website":"www.srilankaairways.com","established":"1990"}';
            response.setBody(body);
            return response;
        }
        //post product mock
        else if(request.getEndpoint() == 'https://dummyjson.com/products/add' && request.getMethod() == 'POST') {
            HttpResponse response = new HttpResponse();
            response.setStatusCode(200);
            response.setStatus('OK');
            String body = '{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]}';
            response.setBody(body);
            return response;
        }
        //post todo mock
        else if(request.getEndpoint() == 'https://dummyjson.com/todos/add' && request.getMethod() == 'POST') {
            HttpResponse response = new HttpResponse();
            response.setStatusCode(200);
            response.setStatus('OK');
            String body = '{"id": 151,"todo": "Use DummyJSON in the project","completed": false,"userId": 5}';
            response.setBody(body);
            return response;
        }
        //get case mock
        else if(request.getEndpoint() == 'callout:NC_Forcecom44/services/apexrest/Case/500B000000ApP1jIAF' && request.getMethod() == 'GET') {
            HttpResponse response = new HttpResponse();
            response.setStatus('OK');
            response.setStatusCode(200);
            String body = '{"Id":"500Dp000003DgbvIAC","CaseNumber":"00001024","Subject":"Design issue with mechanical rotor","Type":"Mechanical","Priority":"Low","Status":"New"}';
            response.setBody(body);
            return response;
        }
        return null;
    }
}