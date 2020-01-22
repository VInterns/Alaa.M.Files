require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url         = process.env.MongoDB_URL

const state =   {
    db:null,
    connection:null,
    client:null
};


connectDB = function(url){
            
}