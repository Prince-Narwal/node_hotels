
const express = require('express');
const app = express();
const db = require('./db');

const Person = require('./models/Person');
const Menu = require('./models/menu')

const bodyParser = require('body-parser');//req.body
const router = require('./routes/personroutes');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Welcome to the hotel!!  How may I help you')
})



app.get('/idli', (req, res) => {
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney: false
    }
    res.send(customized_idli)
})

//Post route to add a person(without try-catch and async-await)//not recommended in the industrial level
/*app.post('/person',(req,res)=>{//here we are using just callback function-->but we will use try catch which is much better and secure
    const data=req.body;//Assuming the request body contains the person data

    //Create a new person document using the mongoose model
    newPerson.save((error,savedPerson)=>{
        if(error){
            console.log("Error saving person:",error)
            res.status(500).json({error:'Internal server error'});
        }
        else{
            console.log("Data saved successfully");
            res.status(200).json(savedPerson);
        }
    })
})*/

app.post('/menu', async (req, res) => {
    try {
        const data = req.body;

        const newMenu = new Menu(data);

        const response = await newMenu.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })
    }
})

app.get('/menu', async (req, res) => {
    try {
        const data = await Menu.find();
        console.log("menu data fetched successfully");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

//import the router files for person
const personRoutes=require('./routes/personroutes')
const menuRoutes=require('./routes/menuroutes')

//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

