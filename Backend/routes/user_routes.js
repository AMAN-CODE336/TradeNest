const express = require("express")
const router = express.Router()
const connection = require ("../db")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const JWT_SECRET = "mysecretkey321"


router.get('/' , (req , resp) =>{
    resp.status(201).json ({ message : " registration succesfully"})
})


router.post('/register' , async (req , resp) =>{
    const { username  ,password , email} = req.body
    
    const hashedPassword = await bcrypt.hash(password, 10);

    try{



    }catch{

    }
})

router.post('/login' , (req , resp) =>{
    const { username , password} = req.body

    const sql = 'SELECT * FROM Signup where name = ? AND password = ?'
    connection.query( sql , [ username , password ] , (err , results) =>{
        if (err) {
            console.error("login error :" , err)
            return resp.status(500).json({ message : "server error"})
        }

        console.log("query results : " , results)

        if(results.length > 0){
            resp.status(200).json ({ message : "Login succesful" , userDetails: results[0]})
        } else{
            resp.status(401).json ({ message : " invalid email or password"})
        }
    })
})

router.post('/google-login', (req, res) => {
    const { name, email } = req.body;
  
    const sql = 'INSERT INTO Signup (name, email) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name)';
    connection.query(sql, [name, email], (err, result) => {
      if (err) {
        console.error("Google login DB error:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.status(200).json({ message: "Google user saved" });
    });
  });
  

module.exports = router