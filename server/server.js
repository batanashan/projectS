
//we are working with these frameworks
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors')
//const studentSchema = require('./model');
const {Student,User} = require('./model');
dotenv.config()
//use the express
const app = express();

//define the server port
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // enable credentials (cookies, authorization headers, etc.)
  }));
  


//bodyparser to be used for sending and receiving data
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//create one uri for connecting database
const uri = process.env.MONGO_URI
const PORT = process.env.PORT
mongoose.connect(uri).then(
   () => console.log("db connected") 
).catch(err => console.log(err))


//implementing routes:
// writing the addstudent route to push the data
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });




app.post('/addstudent',async(req,res) =>{
    const data = req.body.data;
    try{
        const newStudent = new Student(data);
        await newStudent.save();
        //every new student move to the all student ultimately
        //all students should be return
        const allStudents = await Student.find();
        return res.json(allStudents); 
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error:'Internal server error'});
    }
});
//implementing get request
app.get('/getStudents',async(req,res) =>{
    try{
        const allStudents = await Student.find();
        return res.json(allStudents);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error:'internal server error'})
    }
});

//specific id based search
app.get('/getStudents/:id',async (req,res) =>{
    try{
        const Data = await Student.findById(req.params.id)
        return res.json(Data);
    }
    catch(err){
        console.log(err.message)
    }
});

// delete record from table
app.delete('/deleteStudent/:id',async(req,res) =>{
    try{
        await Student.findByIdAndDelete(req.params.id);
        return res.json({message:'Student record deleted successfully'});
    }
    catch(err){
console.log(err.message);
res.status(500).json({error:'Internal Server error'});
    }
})

//above line of code is for student data handling

//below code is for handle user registration
// User Registration
app.post('/register',async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        return res.json({ message: 'User registered successfully' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login route
app.get('/login',async (req, res) => {
    const { username, password } = req.query; // Assuming username and password are sent as query parameters

    try {
        const user = await User.findOne({ username, password });

        if (user) {
            // User found, credentials are correct
            return res.json({ message: 'Login successful', user });
        } else {
            // User not found or credentials are incorrect
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});






//listening the application
app.listen(PORT,()=> {
    console.log(`Server is running port ${PORT}`);
});