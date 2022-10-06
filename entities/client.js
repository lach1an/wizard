class Client{

    constructor(name, contact, phone, email, address, city, pCode){

        this.name = name;
        this.contact = contact;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.city = city;
        this.pCode = pCode;

        console.log("Client Object for: " + name + " created");

    }
}


// export class for use elsewhere
module.exports = Client;