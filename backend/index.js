const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const bodyParser = require("body-parser"); 



const app = express()

// install cor  đúng cách để tránh các requests bị block bới backend. chạy trên       FRONTEND_URL   =    http://localhost:3000  bên .env
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))



app.use(bodyParser.json({ limit: "10000kb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10000kb", extended: true }));



app.use(express.json())
app.use(cookieParser())


app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+ PORT)
    })
})