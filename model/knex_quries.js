const knex = require('./connection')


let post_data = (details) => {
    return knex('users_Table').insert(details)
}

var login_userPhone = (userPhone) => {
    return knex.select("*").from("userInformation").havingIn("userInformation.userPhone",userPhone)
}

var login_userName = (userName) => {
    return knex.select("*").from("userInformation").havingIn("userInformation.userName",userName)
}

let data_post_in_table = (all_details)=>{
    return knex('userInformation').insert(all_details)
}

module.exports ={post_data,login_userPhone,data_post_in_table,login_userName}