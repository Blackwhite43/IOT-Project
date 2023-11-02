const express = require("express");
const sampleController = require("../controllers/sampleController");

const router = express.Router();

router.route('/') // YOU CAN CUSTOMIZE YOUR ROUTE NAME, JUST CHANGE 'route-name' INTO ANYTHING YOU LIKE
    .get(sampleController.get_data)
    .post(sampleController.receive_data) // GET, POST, UPDATE, DELETE, etc.
module.exports = router;