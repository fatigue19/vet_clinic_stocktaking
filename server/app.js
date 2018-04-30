var express = require("express");
var bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectID;

var app = express();
var jsonParser = bodyParser.json();
var url = "mongodb://localhost:27017/usersdb";

app.get("/", function(request, response){
     
    
    response.send("<h2>Привет Express!</h2>");
});

app.get("/api/stock", function(req, res){
      
    mongoClient.connect(url, function(err, db){
        db.collection("stock").find({}).toArray(function(err, goods){
            res.send(goods)
            db.close();
        });
    });
});


app.listen(3000);