console.log("OPENING ROUTER");

require ('../entities/client.js');
const express = require("express");
const clientController = require("../controllers/clientController");

//define a router and create routes
const router = express.Router();

//routes for dynamic processing of clients
//-----------------------------------------------
//route for registration
router.post("/API/new_client", clientController.registerClient);

console.log("EXPORTING ROUTER");
//export router
module.exports = router;