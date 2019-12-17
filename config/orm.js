var connection = require("../config/connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers"
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (vals, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES ?"

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE burgers SET 
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    



    module.exports = orm;
