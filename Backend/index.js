const express = require ("express")
const cors = require("cors")
const user_router = require('./routes/user_routes')
const app = express()
const bodyparser = require("body-parser")


app.use(cors())
app.use(express.json())
app.use(bodyparser.json())


app.use('/api', user_router);
app.listen(3000 ,() =>{
        console.log("server is running on http://localhost:3000")
})
