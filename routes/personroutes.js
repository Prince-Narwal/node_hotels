const express = require('express');
const Person = require('../models/Person');
const router = express.Router();

//post route to add(save) a person(with try-catch and aysnc-wait)(recommended)
router.post('/', async (req, res) => {
    try {
        const data = req.body;//Assuming the request body contains the person data

        //create a new person document using the mongoose model
        const newPerson = new Person(data);

        //save the new person to the database
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//Get method to get/fetch the person's data
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data feched successfully");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;//extract the work type from the URL parameter
        if (worktype == "chef" || worktype == "manager" || worktype == "waiter") {
            const response = await Person.find({ work: worktype });
            console.log("response fetched");
            res.status(200).json(response);
        }
        else {
            res.status(500).json({ error: "invalid work type" })
            console.log("invalid work type");
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//to update the record
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;//Extracts the id from the URL parameter
        const updatedPersonData = req.body;//updated data for the person which comes from the front-end(client)

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,//Return the updated data
            runValidators: true//run mongoose validation
        })
        //if no response come from the client
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
   }
console.log("data updated");
res.status(200).json(response);
   }

    catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" })
}
})

router.delete('/:id',async (req,res)=>{
    try{
        const personId=req.params.id;//Extracts the id from the URL parameter

        //assuming you have a person model
        const response=await Person.findByIdAndDelete(personId);
        console.log("document deleted successfully")
        if(!response){
            return res.status(404).json({error:"Person not found"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
}
)

module.exports = router;

