public with sharing class RestCallouts {

    //Endpoint: https://th-apex-http-callout.herokuapp.com/animals
    //Http Method: GET
    public static HttpResponse getAnimals() {
        //1. Prepare HttpRequest and wrap all the necessary data in it
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
        request.setMethod('GET');

        //2. Prepare Internet
        Http http = new Http();

        //3. Send the request over the internet in order to receive the response
        HttpResponse response = http.send(request);

        //4. Process the response
        System.debug(response.getStatus());
        System.debug(response.getStatusCode());
        System.debug(response.getBody());
        return response;
    }

    //Endpoint: https://dummyjson.com/products
    //Http Method: GET
    public static HttpResponse getProducts() {
        //1. Prepare HttpRequest and wrap all the necessary data in it
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://dummyjson.com/products');
        request.setMethod('GET');

        //2. Prepare Internet
        Http http = new Http();

        //3. Send the request over the internet in order to receive the response
        HttpResponse response = http.send(request);

        //4. Process the response
        if(response.getStatusCode() == 200) {
            String jsonString = response.getBody();
            
            //Convert the jsonString into sobject records
            EcommerceProductWrapper epw = (EcommerceProductWrapper)JSON.deserialize(jsonString, EcommerceProductWrapper.class);
            List<EcommerceProductWrapper.ProductWrapper> pws = epw.products;
            List<Ecommerce_Product__c> products = new List<Ecommerce_Product__c>();
            for(EcommerceProductWrapper.ProductWrapper pw : pws) {
                Ecommerce_Product__c ep = new Ecommerce_Product__c();
                ep.Product_Id__c = pw.id;
                ep.Name = pw.title;
                ep.Description__c = pw.description;
                ep.Price__c = pw.price;
                ep.Discount_Percentage__c = pw.discountPercentage;
                ep.Rating__c = pw.rating;
                ep.Stock__c = pw.stock;
                ep.Brand__c = pw.brand;
                ep.Category__c = pw.category;
                ep.Thumbnail__c = pw.thumbnail;
                products.add(ep);
            }
            //insert records
            try {
                insert products;
            } catch(Exception ex) {
                System.debug(ex.getMessage());
            }
        }
        return response;
    }

    //Endpoint: https://api.instantwebtools.net/v1/airlines
    //Http Method: GET
    public static HttpResponse getAirlines() {
        //1. Prepare HttpRequest and wrap all the necessary data in it
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.instantwebtools.net/v1/airlines/1');
        request.setMethod('GET');

        //2. Prepare Internet
        Http http = new Http();

        //3. Send the request over the internet in order to receive the response
        HttpResponse response = http.send(request);

        //4. Process the response
        if(response.getStatusCode() == 200) {
            String jsonString = response.getBody();
            //convert json string into sobject
            AirlinesWrapper aw = (AirlinesWrapper)JSON.deserialize(jsonString, AirlinesWrapper.class);
            Airlines__c airline = new Airlines__c();
            airline.Airlines_Id__c = aw.id;
            airline.Name = aw.name;
            airline.Country__c = aw.country;
            airline.Logo_URL__c = aw.logo;
            airline.Slogan__c = aw.slogan;
            airline.Head_Quarters__c = aw.head_quaters;
            airline.Website__c = aw.website;
            airline.Established__c = aw.established;
            //insert airlines
            try {
                insert airline;
            } catch(Exception ex) {
                System.debug(ex.getMessage());
            }
        }
        return response;
    }

}