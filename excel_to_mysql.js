// Importing mysql and csvtojson packages 
// Requiring module 
var knex = require('./model/connection')
const csvtojson = require('csvtojson'); 
const Knex = require('knex');
const mysql = require("mysql"); 
  

  
// // Establish connection to the database 
// var  con = require ("knex")({
//     client: 'mysql',
//     connection:{
//         host: "127.0.0.1",
//         user: "root",
//         password: "Priya@12345",
//         database: "propertyData"
//     }
// })
  
// con.connect((err) => { 
//     if (err) return console.error( 
//             'error: ' + err.message); 
  
//     con.query("DROP TABLE property",  
//     (err, drop) => { 
  
//         // Query to create table "sample" 
//         // var createStatament =  
//         // "CREATE TABLE property(Financial Year char(50),"PTIN int", "OwnerName" char(30),Father/Husband Name
//         // ,House No,Locality,Tax Ward,Ward No,Zone,Property Type Classification,Residential/Commercial ARV,
//         // ArrearHouseTax,
//         // ArrearWaterTax,ArrearSewerTax,HouseTax,WaterTax,SewerTax,SurchareHouseTax,SurchareWaterTax,SurchareSewerTax,
//         // Bill Generated Total,Total Paid Amount,Last Payment Date,
//         // "Email char(50), int, city char(30))"
  
//         // Creating table "sample" 
//         con.query(createStatament, (err, drop) => { 
//             if (err) 
//                 console.log("ERROR: ", err); 

//         }); 
//     }); 
// }); 
  
// CSV file name 
const fileName = "test.csv"; 
  
csvtojson().fromFile(fileName).then(source => { 
    // Fetching the data from each row  
    // and inserting to the table "sample" 
    for (var i = 0; i < source.length; i++) { 
        var Financial_Year = source[i]["Financial_Year"], 
        PTIN = source[i]["PTIN"], 
        Owner_Name  = source[i]["Owner_Name"], 
        Father_Husband_Name = source[i]["Father_Husband_Name"],
        House_No = source[i]['House_No'],
        Locality = source[i]['Locality'],
        Tax_Ward = source[i]['Tax_Ward'],
        Ward_No = source[i]['Zone'],
        property = source[i]['Property'],
        ResidentialCommercialARV = source[i]['ResidentialCommercialARV'],
        ArrearHouseTax = source[i]['ArrearHouseTax'],
        ArrearWaterTax = source[i]['ArrearWaterTax'],
        ArrearSewerTax = source[i]['ArrearSewerTax'],
        HouseTax = source[i]['HouseTax'],
        WaterTax = source[i]['WaterTax'],
        SewerTax = source[i]['SewerTax'],
        SurchareHouseTax = source[i]['SurchareHouseTax'],
        SurchareWaterTax = source[i]['SurchareWaterTax'],
        Bill_Generated_Total = source[i]['Bill_Generated_Total'],
        Total_Paid_Amount = source[i]['Total_Paid_Amount'],
        Last_Payment_Date = source[i]['Last_Payment_Date']


  
        var insertStatement =  
        `INSERT INTO sample values(?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`; 
        var items = [Financial_Year,PTIN,Owner_Name,Father_Husband_Name,House_No,Locality,
            Tax_Ward,Ward_No,property,ResidentialCommercialARV,ArrearHouseTax,ArrearWaterTax,
            ArrearSewerTax,HouseTax,WaterTax,SewerTax,SurchareHouseTax,SurchareWaterTax,
            Bill_Generated_Total,Total_Paid_Amount,Last_Payment_Date]; 
  
        // Inserting data of current row 
        // into database 
        Knex.query(insertStatement, items, (err, results, fields) => { 
            if (err) { 
                console.log("Unable to insert item at row ", i + 1); 
                return console.log(err); 
            } 
        }); 
    } 
    console.log( "All items stored into database successfully"); 
}); 