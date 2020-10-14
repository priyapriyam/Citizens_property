
var knex = require('./connection')

// 1 excel sheet data imported in mysql table
knex.schema.hasTable("user_details").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("property",(table)=>{
            table.string('Financial_Year'),
            table.integer('PTIN'),
            table.string('Owner_Name')
            table.string('Father_Husband_Name'),
            table.string('House_No'),
            table.string('Locality'),
            table.string('Tax_Ward'),
            table.string('Ward_No'),
            table.string('Zone'),
            table.string('Property_type'),
            table.string('ResidentialCommercialARV'),
            table.string('ArrearHouseTax'),
            table.string('ArrearWaterTax')
            table.string('ArrearSewerTax'),
            table.string('HouseTax'),
            table.string('WaterTax'),
            table.string('SewerTax'),
            table.string('SurchareHouseTax'),
            table.string('SurchareWaterTax'),
            table.string('SurchareSewerTax'),
            table.string('Bill_Generated_Total'),
            table.string('Total_Paid_Amount'),
            table.string('Last_Payment_Date')
        })
    .catch((err)=>{
        console.log(err)
        })
    }
    return console.log("user_details has created")
})

//3table for  users information
knex.schema.hasTable("userInformation").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("userInformation",(table)=>{
            table.increments('Id'),
            table.string('userName'),
            table.string('userEmail'),
            table.string('userPhone'),
            table.string('citizen')
    })
    .catch((err)=>{
        console.log(err)
        })
    }
    return console.log("user_details has created")
})

// 
knex.schema.hasTable("roles").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("roles",(table)=>{
            table.increments('Id'),
            table.string('admin'),
            table.string('superadmin'),
            table.string('citizen')
    })
    .catch((err)=>{
        console.log(err)
        })
    }
    return console.log("user_details has created")
})

// 5 appoveval and rejected status 
knex.schema.hasTable("Status_table").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("Status_table",(table)=>{
            table.increments('Id'),
            table.string('userName'),
            table.string('admin'),
            table.string('admin_Status'),
            table.string('Super_Admin'),
            table.string('Super_admin_Status')
    })
    .catch((err)=>{
        console.log(err)
        })
    }
    return console.log("user_details has created")
})






