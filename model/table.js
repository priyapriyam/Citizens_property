
var knex = require('./connection')

// knex.schema.hasTable("user_details").then((exists)=>{
//     if (!exists){
//         return knex.schema.createTable("property",(table)=>{
//             table.string('Financial_Year'),
//             table.integer('PTIN'),
//             table.string('Owner_Name')
//             table.string('Father_Husband_Name'),
//             table.string('House_No'),
//             table.string('Locality'),
//             table.string('Tax_Ward'),
//             table.string('Ward_No'),
//             table.string('Zone'),
//             table.string('Property_type'),
//             table.string('ResidentialCommercialARV'),
//             table.string('ArrearHouseTax'),
//             table.string('ArrearWaterTax')
//             table.string('ArrearSewerTax'),
//             table.string('HouseTax'),
//             table.string('WaterTax'),
//             table.string('SewerTax'),
//             table.string('SurchareHouseTax'),
//             table.string('SurchareWaterTax'),
//             table.string('SurchareSewerTax'),
//             table.string('Bill_Generated_Total'),
//             table.string('Total_Paid_Amount'),
//             table.string('Last_Payment_Date')
//         })
//     .catch((err)=>{
//         console.log(err)
//         })
//     }
//     return console.log("user_details has created")
// })



// knex.schema.createTable("user_details", (table) => {
//     table.increments('ID'),
//     table.string('Financial_Year'),
//     table.integer('PTIN'),
//     table.string('Owner_Name')
//     table.string('Father_Husband_Name'),
//     table.string('House_No'),
//     table.string('Locality'),
//     table.string('Tax_Ward'),
//     table.string('Ward_No'),
//     table.string('Zone'),
//     table.string('Property'),
//     table.string('ResidentialCommercialARV'),
//     table.string('ArrearHouseTax'),
//     table.string('ArrearWaterTax')
//     table.string('ArrearSewerTax'),
//     table.string('HouseTax'),
//     table.string('WaterTax'),
//     table.string('SewerTax'),
//     table.string('SurchareHouseTax'),
//     table.string('SurchareWaterTax'),
//     table.string('Bill_Generated_Total'),
//     table.string('Total_Paid_Amount'),
//     table.string('Last_Payment_Date')
// }).then(()=>{
//     console.log("table created well")
// }).catch((err)=>{
//     console.log(err,"oops some err")
// })

// knex.schema.createTable("user_details", (table) => {
//     table.increments('ID'),
//     table.string('Financial_Year'),
//     table.integer('PTIN'),
//     table.string('Owner_Name')
//     table.string('Father_Husband_Name'),
//     table.string('House_No'),
//     table.string('Locality'),
//     table.string('Tax_Ward'),
//     table.string('Ward_No'),
//     table.string('Zone'),
//     table.string('Property'),
//     table.string('ResidentialCommercialARV'),
//     table.string('ArrearHouseTax'),
//     table.string('ArrearWaterTax')
//     table.string('ArrearSewerTax'),
//     table.string('HouseTax'),
//     table.string('WaterTax'),
//     table.string('SewerTax'),
//     table.string('SurchareHouseTax'),
//     table.string('SurchareWaterTax'),
//     table.string('Bill_Generated_Total'),
//     table.string('Total_Paid_Amount'),
//     table.string('Last_Payment_Date')
// }).then(()=>{
//     console.log("table created well")
// }).catch((err)=>{
//     console.log(err,"oops some err")
// })















// var knex = require('../model/connection')

// knex.schema.hasTable("property").then((exists)=>{
//     if (!exists){
//         return knex.schema.createTable("property",(table)=>{
//             table.string('Financial_Year'),
//             table.integer('PTIN'),
//             table.string('Owner_Name')
//             table.string('Father_Husband_Name'),
//             table.string('House_No'),
//             table.string('Locality'),
//             table.string('Tax_Ward'),
//             table.string('Ward_No'),
//             table.string('Zone'),
//             table.string('Property'),
//             table.string('ResidentialCommercialARV'),
//             table.string('ArrearHouseTax'),
    //         table.string('ArrearWaterTax')
    //         table.string('ArrearSewerTax'),
    //         table.string('HouseTax'),
    //         table.string('WaterTax'),
    //         table.string('SewerTax'),
    //         table.string('SurchareHouseTax'),
    //         table.string('SurchareWaterTax'),
    //         table.string('Bill_Generated_Total'),
    //         table.string('Total_Paid_Amount'),
    //         table.string('Last_Payment_Date')
    //     })
    // .catch((err)=>{
    //     console.log(err)
//         })
//     }
//     return console.log("user_details has created")
// })
// second tbl
// knex.schema.hasTable("users_Table").then((exists)=>{
//     if (!exists){
//         return knex.schema.createTable("users_Table",(table)=>{
//             table.increments('Role_id')
//             table.string('RoleName')
//         })
//     .catch((err)=>{
//         console.log(err)
//         })
//     }
//     return console.log("users_Table has created")
// })




knex.schema.hasTable("userInformation").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("userInformation",(table)=>{
            table.increments('Id'),
            table.string('userName'),
            table.string('userEmail'),
            table.string('userPhone'),
            table.integer("Role_id").unsigned()
            table.foreign("Role_id").references("users_Table.Role_id")
        })
    .catch((err)=>{
        console.log(err)
        })
    }
    return console.log("user_details has created")
})
