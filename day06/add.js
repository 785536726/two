// 链接mongodb客户端
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017"
function connectDB(callback) {
    mongoClient.connect(url, (err, db) => {
        console.log(db)
        var dbName = db.db("adminuser");
        if (err) {
            callback(err, null)
        }
        callback(err, db, dbName)
    })
}
exports.add = function (collectionName, json, callback) {
    connectDB(function (err, db, dbName) {
        dbName.collection(collectionName).insert(json, function (err, result) {
            if (err) {
                callback(err, null)
            }
            callback(err, result)
            db.close()
        })
    })
}
exports.find = function (collectionName, json, callback) {
    connectDB(function (err, db, dbName) {
        dbName.collection(collectionName).find(json).toArray(function (err, result) {
            if (err) {
                callback(err, null)
            }
            callback(err, result)
            db.close()
        })
    })
}

