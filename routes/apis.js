
const knex = require('../model/knex_quries')

module.exports = (app) =>{ 

app.post('/post_data/', (req, res) => {
    let details = {
        RoleName : req.body.RoleName
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
}