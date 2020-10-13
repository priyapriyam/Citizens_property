
const express = require('express');
const app = express();
const knex = require('../model/knex_quries')
const jwt = require('jsonwebtoken')

    // api for user ragister

app.post('/post_data/', (req, res) => {
    let details = {
        RoleName: req.body.RoleName
    }
    knex.post_data(details)
    .then((result) => {
        res.send(result)
        console.log("data_inserted")
    })
    .catch((err) => {
        res.send(err)
        console.log(err)
    })
})
    // 2api  for login

app.post("/login", (req, res) => {
    let userPhone = req.body.userPhone;
    let userName = req.body.userName;
    knex.login_userPhone(userPhone)
    .then((data) => {
        if (data.length == 0) {
            res.send('worng userPhone')
        } else {
            knex.login_userName(userName).then((data) => {
                if (data.length == 0) {
                    res.send('wrong userName ')
                } else {
                    let token = jwt.sign({ "costomer": data }, "priya")
                    res.cookie(token)
                    res.send('..........login successful..........')
                }
            })
        
        }
    })
})

app.get('/getthedata/:PTIN', (req,res) => {
    PTIN = req.params.PTIN
    knex.get_data_by_PTIN(PTIN)
    .then((result) => {
        res.send(result)
        console.log("data is readble")
    })
    .catch((err) => {
        res.send(err)
        console.log("err")
    })
})


module.exports = app;
        



