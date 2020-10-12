const knex = require('./connection')


let post_data = (details) => {
    return knex('users_Table').insert(details)
}

let data_post_in_table = (all_details)=>{
    return knex('userInformation').insert(all_details)
}

module.exports ={post_data,data_post_in_table}