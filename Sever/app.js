require("dotenv").config();
const express = require("express")
const authRoute = require("./routes/auth")
const patientRoute = require("./routes/patient")
const app = express();
const connectDB = require('./database/connect')
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors(
    {
        origin: "*"
    }
));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(authRoute);
app.use(patientRoute)

const port = process.env.PORT || 5000;

const start = async() => {
    
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () =>{
            console.log(`Server started. Listen on ${port}`)

        });
    }
    catch (error){
        console.log(error);
    }
};
start();