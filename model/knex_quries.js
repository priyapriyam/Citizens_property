const knex = require('./connection')

//1 reg
let users_data = (all_detail)=>{
    return knex('userInformation').insert(all_detail)
}

//2login 
var login_userName = (userName) => {
    return knex.select("*").from("userInformation").havingIn("userInformation.userName",userName)
}

//3 get data  by PTIN
let get_data_by_PTIN = (PTIN) =>{
    return knex.select ("*").from ('property') .where ('PTIN',PTIN)
}

//4 udate data by PTIN

let update_citizen = (citizen) => {
    return knex.select("*").from("userInformation").havingIn("userInformation.citizen",citizen)
}

//5 for roles

let data_post_in_table = (all_details)=>{
    return knex('roles').insert(all_details)
}

//6 citizen status 

let citizen_status = (data) => {
    return knex('Status_table').insert(data)
};


//7 Admin and super admin's action

let get_data = (Id) => {
    return knex('Status_table').select('*').where('Status_table.Id',Id)
};

module.exports ={users_data,login_userName,get_data_by_PTIN,update_citizen,data_post_in_table,citizen_status,get_data}