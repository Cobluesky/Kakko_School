const express = require("express")
const router = express.Router();
router.get("/", (req, res) => {
    res.send("This is Board.");
})
router.get("/write", (req, res) => {
    res.send("This is Post Some Articles?");
})
module.exports = router;