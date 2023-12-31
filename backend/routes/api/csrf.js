const express = require('express');
const router = express.Router();

/* GET users listing. */
const { isProduction } = require("../../config/keys")

if(!isProduction) {
    router.get('/restore', function(req, res, next) {
        const csrfToken = req.csrfToken()
        res.status(200).json({
            "CSRF-Token": csrfToken
    });});
    }

module.exports = router;