var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyuIg57CYX1hbbTD'}).base('appVXz0owqQZYJX0j');


function newClient(client, callback){

    base('Client Details').create([
        {
            "fields":{
                "Name" : client.name,
                "Contact": client.name,
                "Phone Number" : client.phone,
                "Email" : client.email,
                "Address" : client.address,
                "City" : client.city,
                "Postcode" : client.pCode,
                "Assignee" : {
                    "email" : "lachlan.mcintyre@hotmail.co.uk"
                },
                "Status": "Todo"
            }
        }
    ], function(err, records){

        // check for errors
        if(err){
            console.log(err);
            callback(err, null);
        }
        // return the new record ID to the callback
        else{
            callback(null, records[0].getId());
        }

    });




}

// export DAO functions for controller use
module.exports = {

    newClient



}