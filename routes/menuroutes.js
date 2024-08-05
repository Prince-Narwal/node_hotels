const express=require('express');
const router=express.Router();

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
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

module.exports=router;