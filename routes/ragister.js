const express = require('express');
const app = express();
const knex = require('../model/knex_quries')

1// first api for ragister the user
app.post('/newuser', (req, res) => {
    var all_details = {
        Role_id : req.body.Role_id,
        userName : req.body.userName,
        userEmail : req.body.userEmail,
        userPhone : req.body.userPhone
    }
    var otp = req.body.otp
    if(otp == "1234"){
        knex.data_post_in_table(all_details)
        .then(() => {
            res.send("postdata")
        }).catch((err) => {
            res.send(err)
        })
    }
})

module.exports = app;
