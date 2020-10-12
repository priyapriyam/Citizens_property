var knex = require('../model/connection')

knex.schema.hasTable("user_details").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("property",(table)=>{
            table.increments('ID'),
            table.string('Financial_Year'),
            table.integer('PTIN'),
            table.string('Owner_Name')
            table.string('Father_Husband_Name'),
            table.string('House_No'),
            table.string('Locality'),
            table.string('Tax_Ward'),
            table.string('Ward_No'),
            table.string('Zone'),
            table.string('Property'),
            table.string('ResidentialCommercialARV'),
            table.string('ArrearHouseTax'),
            table.string('ArrearWaterTax')
            table.string('ArrearSewerTax'),
            table.string('HouseTax'),
            table.string('WaterTax'),
            table.string('SewerTax'),
            table.string('SurchareHouseTax'),
            table.string('SurchareWaterTax'),
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