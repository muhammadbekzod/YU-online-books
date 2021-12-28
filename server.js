const express = require('express')
const connectDB = require('./config/db')
require('dotenv'). config()

//Connect to DB

connectDB()

const app = express()

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Methods",
//       "GET,HEAD,OPTIONS,POST,PUT,DELETE"
//     );
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     next();
//   });

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/travel', require('./routes/travelRoutes'))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server listening on port : ${PORT}`))

