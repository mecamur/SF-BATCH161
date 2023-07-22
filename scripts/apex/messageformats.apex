//JSON Format
[
    {
        "Name" : "Universal Containers",
        "Type" : "New Customer",
        "Industry" : "Education",
        "AnnualRevenue" : 2000000
    },
    {
        "Name" : "Universal Containers",
        "Type" : "New Customer",
        "Industry" : "Education",
        "AnnualRevenue" : 2000000
    }
]
//UC1: Convert an account record into JSON format
Account acc = [SELECT Id, Name, Type, Industry, AnnualRevenue FROM Account WHERE Type != null AND Industry != null LIMIT 1];
System.debug(acc);
String jsonString = JSON.serialize(acc);
System.debug(jsonString);

//UC2: Convert 5 account records into JSON format
List<Account> acc = [SELECT Id, Name, Type, Industry, AnnualRevenue FROM Account WHERE Type != null AND Industry != null LIMIT 5];
System.debug(acc);
String jsonString = JSON.serialize(acc);
System.debug(jsonString);

//UC3: Convert a contact record into JSON format (FirstName, LastName, Email, Title, Department)
Contact con = [SELECT FirstName, LastName, Email, Title, Department FROM Contact WHERE Department != null LIMIT 1];
String jsonString = JSON.serialize(con);
System.debug(jsonString);

//UC4: Convert 5 contact records into JSON format
List<Contact> con = [SELECT FirstName, LastName, Email, Title, Department FROM Contact WHERE Department != null LIMIT 5];
String jsonString = JSON.serialize(con);
System.debug(jsonString);


//XML Format
<Account>
    <Name>Universal Containers</Name>
    <Type>New Customer</Type>
    <Industry>Education</Industry>
</Account>

//Test Callouts
RestCallouts.getAnimals();
RestCallouts.getProducts();
RestCallouts.getAirlines(2);
RestCallouts.postProduct('a015i00000zj4QmAAI');
RestCallouts.getCase();

SoapCallouts.getParksByCountry('India');
SoapCallouts.add(1020,2430);
SoapCallouts.multiply(1020,2430);

<?xml version="1.0" encoding="UTF-8"?>
    <env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <env:Header />
            <env:Body>
                <m:byCountry xmlns:m="http://parks.services/">
                    <arg0>United States</arg0>
                </m:byCountry>
            </env:Body>
    </env:Envelope>

<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns2:byCountryResponse xmlns:ns2="http://parks.services/">
            <return>Yellowstone</return>
            <return>Mackinac National Park</return>
            <return>Yosemite</return>
        </ns2:byCountryResponse>
    </soap:Body>
</soap:Envelope>


//1. Prepare HttpRequest and wrap all the necessary information
HttpRequest request = new HttpRequest();
request.setEndpoint('');
request.setMethod('POST');
request.setBody('<json body>');
request.setHeader('Content-Type', 'application/json;charset=UTF-8');
request.setHeader('Authorization', 'Bearer dfe085965de938aa9fa71eb14785d23afc0043826a543bd8548a6f3a84da1a52');