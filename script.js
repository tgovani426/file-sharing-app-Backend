const connectDB = require('./config/db');
const File = require('./models/file');
const fs = require('fs');
const { exit } = require('process');


connectDB()

File.deleteMany({ createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } }).then(function () {
    console.log("Data deleted"); // Success
    exit()
}).catch(function (error) {
    console.log(error);
})
