const knex = require('./connection')

// reg
let users_data = (all_detail)=>{
    return knex('userInformation').insert(all_detail)
}

//login 
var login_userName = (userName) => {
    return knex.select("*").from("userInformation").havingIn("userInformation.userName",userName)
}

//get data  by PTIN
let get_data_by_PTIN = (PTIN) =>{
    return knex.select ("*").from ('property') .where ('PTIN',PTIN)
}

let update_citizen = (citizen) => {
    return knex.select("*").from("userInformation").havingIn("userInformation.citizen",citizen)
}

let data_post_in_table = (all_details)=>{
    return knex('roles').insert(all_details)
}

let citizen_status = (data) => {
    return knex('Status_table').insert(data)
};

let get_data = (Id) => {
    return knex('Status_table').select('*').where('Status_table.Id',Id)
};

module.exports ={users_data,login_userName,get_data_by_PTIN,update_citizen,data_post_in_table,citizen_status,get_data}