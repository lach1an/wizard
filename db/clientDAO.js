var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyuIg57CYX1hbbTD'}).base('appVXz0owqQZYJX0j');


function newClient(client, callback){

    base('Client Details').create([
        {
            "fields":{
                "Name" : "${client.ID}",
                "Contact": "${client.name}",
                "Phone Number" : "${client.phone}",
                "Email" : "${client.email}",
                "Address" : "${client.address}",
                "City" : "${client.city}",
                "Postcode" : "${client.city}",
                "Assignee" : {
                    "email" : "lachlan.mcintyre@hotmail.co.uk"
                }
            }
        }
    ], function(err, records){

        // check for errors
        if(err){
            console.log(err);
            throw err;
        }
        // return the new record ID to the callback
        else{
            callback(null, records[0].getId());
        }

    });




}