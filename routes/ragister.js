const express = require('express');
const app = express();
const knex = require('../model/knex_quries')

//1 First api for ragister the user
app.post('/newuser', (req, res) => {
    var all_detail = {
        userName : req.body.userName,
        userEmail : req.body.userEmail,
        userPhone : req.body.userPhone,
        citizen : req.body.citizen
    }
    var otp = req.body.otp
    if(otp == "1234"){
        knex.users_data(all_detail)
        .then(() => {
            res.send("postdata")
        }).catch((err) => {
            res.send(err)
        })
    }
})

module.exports = app;
