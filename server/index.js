import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import nodemon from "nodemon";

const app = express(); //initialise the express framework

app.use(bodyParser.json({limit: " 20mb", extended : true})); //limit of json data is set
app.use(bodyParser.urlencoded({limit: " 20mb", extended : true}));

app.use(cors()); 



const CONNECTION_URL = "mongodb+srv://admin:test@cluster0.wcmwkx8.mongodb.net/?retryWrites=true&w=majority";

const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology: true
}).then(()=> app.listen(PORT, () =>
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);





