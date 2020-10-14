const express = require('express');
const app = express();
const knex = require('../model/knex_quries')
const jwt = require('jsonwebtoken')

// THIS API FOR LOGIN
app.post('/login',(req,res)=>{
    var userName = req.body.userName.trim();
    var userPhone = req.body.userPhone
    let data=knex.login_userName(userName) 
    data.then((data)=>{
        console.log(data)
        if(data.length==0){
            res.send("wrong userName")
        } 
        else{
            if(data[0]["userPhone"] == userPhone){
                userName=data[0].userName
                citizen=data[0].citizen
                userPhone=data[0].userPhone
                let token = jwt.sign({userName,citizen,userPhone},"my_secreat_key")
                res.cookie(token)
                res.json("login sucessfully")
            } 
            else{ 
              res.send("wrong userPhone")
            }  
        }
    }).catch((err)=>{  
        res.send(err)   
    })
}) 

//
app.get('/getthedata/:PTIN', (req,res) => {
    PTIN = req.params.PTIN
    knex.get_data_by_PTIN(PTIN)
    .then((result) => {
        res.send(result).
        console.log("data is readble")
    })
    .catch((err) => {
        res.send(err)
        console.log("err")
    })
})
//
app.put("/updateApi/:PTIN", (req, res) => {
    var PTIN = req.params.PTIN
    let alltoken = req.headers.cookie
    var token = alltoken.split('=')
    jwt.verify(token[0],"my_secreat_key",(err,result)=>{
    var citizen_data = result["citizen"]
    knex.update_citizen(citizen_data)
    .then((data) => {
        var citizen = data[0]["citizen"]
    if (citizen_data == citizen){
        var update_data = {
            Owner_Name : req.body.Owner_Name,
            House_No : req.body.House_No
        }
        knex.update(update_data,PTIN)
        .then(() => {
            res.send("updated data")
        }).catch((err) => {
            console.log(err)
        })
        }
    })
    })
})


//roles api
app.post('/insert_data',(req,res)=>{
    let post_data = {
        admin : req.body.admin,
        superadmin : req.body.superadmin,
        citizen : req.body.citizen 
    }
    knex.data_post_in_table(post_data)
        .then((result) => {
            res.send(result)
            console.log("data_inserted")
        })
        .catch((err) => {
            res.send(err)
            console.log(err)
    })
})

app.post("/Request",(req,res) => {
    let alltoken = req.headers.cookie
    var token = alltoken.split('=')
    jwt.verify(token[0],"my_secreat_key",(err,result)=>{
        let data = {
            userName : req.body.userName,
            admin : req.body.admin,
            admin_Status : req.body.admin_Status,
            Super_Admin : req.body.Super_Admin,
            Super_admin_Status : req.body.Super_admin_Status
        }
        knex.citizen_status(data)
        .then(() => {
            res.send("insert")
        }).catch((err) => {
            res.send(err)
        })
    })
});


app.get('/get/:id',(req,res) => {
    var id = req.params.id
    knex.get_data(id)
    .then((Response) => {
    var admin_Status = Response[0]['admin_Status']
    var Super_admin_Status = Response[0]['Super_admin_Status']
    var userName = Response[0]['userName']
    if (admin_Status == "yes"){
        if (Super_admin_Status == "yes"){
            var data = "got Approved"
            console.log(userName,data)
        }
        else if (Super_admin_Status == "NO"){
            var data = "Super_admin Rejected"
        }
    }
    else if (admin_Status == "NO"){
        res.send('you have to do re-submission')
    }
    })
});

module.exports = app;
        



