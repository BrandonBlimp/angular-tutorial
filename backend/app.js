var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var uri = "mongodb+srv://guest1:123@cluster0-pos8v.mongodb.net/test?retryWrites=true";
var DB_NAME = "db_1";
var PADDLERS_COLLECTION = "paddlers";
// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

var app = express();

app.use(bodyParser.json());
// app.use(cors);

mongodb.MongoClient.connect(process.env.MONGODB_URI || uri, function(err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = client.db(DB_NAME);
  console.log("Database connection ready, connected to database:", db.databaseName);

  // initialize the app
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  })
});

// -------------------------------------------------------------------------------------------------------
//
// API routes
//
// -------------------------------------------------------------------------------------------------------

// generic error handler
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error":message});
}

/* 
    "/api/paddlers"
    GET: returns all paddlers
    POST: creates a new paddler
 */

app.get("/api/paddlers", cors(), function(req, res) {
  db.collection(PADDLERS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to fetch paddlers.");
    } else {
      res.status(200).json(docs);
      console.log("GET /api/paddlers OK")
    }
  })
});

app.post("/api/paddlers", cors(), function(req, res) {
  var newPaddler = req.body;

  if (!req.body.name) {
    handleError(res, "POST /api/paddlers has invalid user input", "Must provide a name.", 400);
  } else if (!req.body.paddlingSide) {
    handleError(res, "POST /api/paddlers has invalid user input", "Must provide a paddling side.", 400);
  } else if (!req.body.time_s) {
    handleError(res, "POST /api/paddlers has invalid user input", "Must provide a paddler time.", 400);
  } else {
    db.collection(PADDLERS_COLLECTION).insertOne(newPaddler, function(err, doc) {
      if (err) {
        handleError(ers, err.message, "Failed to create new contact.");
      } else {
        res.status(201).json(doc.ops[0]);
        console.log("POST /api/paddlers OK")
      }
    })
  }
});

/* 
    "/api/paddlers/:id"
    GET: returns paddler by id
    PUT: update paddler by id
    DELETE: deletes paddler by id
 */

app.get("/api/paddlers/:id", function (req, res) {
  db.collection(PADDLERS_COLLECTION)
  .find({_id: new mongodb.ObjectId(req.params.id)})
  .toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to fetch paddler.");
    } else {
      res.status(200).json(docs);
      console.log("GET /api/paddlers/%s OK", req.params.id);
    }
  })
});

app.put("/api/paddlers/:id", function (req, res) {
});

app.post("/api/paddlers/:id", function (req, res) {
});


module.exports = app;
