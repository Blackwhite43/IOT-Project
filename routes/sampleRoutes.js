const express = require("express");
const sampleController = require("../controllers/sampleController");

const router = express.Router();

router.route('/')
    .get(sampleController.get_data)
    .post(sampleController.receive_data)
    .delete(sampleController.delete_all_data)
module.exports = router;