const { application } = require("express");
const express = require("express");

const app = express();

const router = express.Router();

router.get("/", (req, res) => 
{
    res.sendFile("Hello Users!");
})

module.exports = router;