const mysql = require("mysql2")

const connection = mysql.createConnection ({
    host : 'localhost', 
user : 'stock',
password : 'Aman@123',
database : 'stockdb'
})

connection.connect(err =>{
  if (err){
    console.error ("my sql cause error " , err.message)
    return
  }
  else{
    console.log("database connected succesfully")
  }
})
module.exports = connection