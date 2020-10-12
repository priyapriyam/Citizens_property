const csvtojson = require('csvtojson'); 
const mysql = require("mysql"); 
  
// Database credentials 
const hostname = "localhost", 
    username = "root", 
    password = "Priya@12345", 
    databsename = "propertyData"
  
// Establish connection to the database 
let con = mysql.createConnection({ 
    host: hostname, 
    user: username, 
    password: password, 
    database: databsename, 
}); 
  
con.connect((err) => { 
    if(err) return console.error(
        'error: ' + err.message)

});

    

  
// CSV file name 
const fileName = "test.csv"; 
  
csvtojson().fromFile(fileName).then(source => { 
    // Fetching the data from each row  
    // and inserting to the table "sample" 
    for (var i = 0; i < source.length; i++) { 
        // console.log(source[i]);
        // var Financial_Year = source[i]['PTIN']
        var Financial_Year = source[i]['Financial Year'],
        PTIN = source[i]["PTIN"], 
        Owner_Name  = source[i]["Owner Name"], 
        Father_Husband_Name = source[i]["Father/Husband Name"],
        House_No = source[i]['House No'],
        Locality = source[i]['Locality'],
        Tax_Ward = source[i]['Tax Ward'],
        Ward_No = source[i]['Ward No'],
        Zone = source[i]['Zone']
        Property_type = source[i]['Property Type Classification'],
        ResidentialCommercialARV = source[i]['Residential/Commercial ARV'],
        ArrearHouseTax = source[i]['ArrearHouseTax'],
        ArrearWaterTax = source[i]['ArrearWaterTax'],
        ArrearSewerTax = source[i]['ArrearSewerTax'],
        HouseTax = source[i]['HouseTax'],
        WaterTax = source[i]['WaterTax'],
        SewerTax = source[i]['SewerTax'],
        SurchareHouseTax = source[i]['SurchareHouseTax'],
        SurchareWaterTax = source[i]['SurchareWaterTax'],
        SurchareSewerTax = source[i]['SurchareSewerTax'],
        Bill_Generated_Total = source[i]['Bill Generated Total'],
        Total_Paid_Amount = source[i]['Total Paid Amount'],
        Last_Payment_Date = source[i]['Last Payment Date']

        // console.log(Ownwer_Name);


  
        var insertStatement =  
        `INSERT INTO property values(?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`; 
        var items = [Financial_Year,PTIN,Owner_Name,Father_Husband_Name,House_No,Locality,
            Tax_Ward,Ward_No,Zone,Property_type,ResidentialCommercialARV,ArrearHouseTax,ArrearWaterTax,
            ArrearSewerTax,HouseTax,WaterTax,SewerTax,SurchareHouseTax,SurchareWaterTax,SurchareSewerTax,
            Bill_Generated_Total,Total_Paid_Amount,Last_Payment_Date]; 
  
        // Inserting data of current row 
        // into database 
        con.query(insertStatement, items, (err, results, fields) => { 
            if (err) { 
                console.log("Unable to insert item at row ", i + 1); 
                return console.log(err); 
            } 
        }); 
    } 
    console.log( "All items stored into database successfully"); 
}); 