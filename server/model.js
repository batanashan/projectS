//we are writing schema for the database
const mongoose = require('mongoose');

const Students = mongoose.Schema({
    sname:String,
    age:Number,
    grade:String,
});

// User Registration Schema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
});

//export two schemas seperately
const Student = mongoose.model("Student", Students);
const User = mongoose.model("User", userSchema);

//module.exports = mongoose.model("Student",studentSchema);

//if you write only one schema above line of code woks
//we are creating two schemas so that we can move both schemaas
//two seperate variables and export both schemas

module.exports = { Student, User };