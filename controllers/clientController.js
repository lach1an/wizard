// import client object 
const Client = require ('../entities/client.js');
const clientDAO = require ('../db/clientDAO.js');

const registerClient = (request, response) => {

    let name = request.body.name;
    let contact = request.body.fname + " " + request.body.lname;
    let phone = request.body.phone;
    let email = request.body.email;
    let address = request.body.add1 + "\n\r" + request.body.add2;
    let city = request.body.city;
    let pCode = request.body.pCode;

    let client = new Client(name, contact, phone, email, address, city, pCode);

    clientDAO.newClient(client, function(DAOerr, recordID){

        if(DAOerr){
            response.send(`Insert Failed: ${DAOerr}`);
            throw DAOerr;
        }
        console.log(`Record ${recordID} inserted to Airtable`);
        response.send(JSON.stringify(client));

    });

}

module.exports = {

    registerClient

}