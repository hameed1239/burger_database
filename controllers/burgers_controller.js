const router = require('express').Router();
const Burger = require('../models/Burger');

router.get('/', (req,res)=>{
    res.redirect('/burgers');
});

router.get('/burgers', (req,res)=>{
    //all burgers from the database
    Burger.findAll({}).then(dbBurger =>{
        const hbsObject = {
            burger: dbBurger //create an object and assign db res as value
        }
        console.log (hbsObject);
        return res.render('index', hbsObject)
    });
});

router.post('/burgers/create', (req,res)=>{
    //handle creating a burger
    Burger.create({
        burger_name: req.body.burger_name
    })
    //pass the result or our call
    .then(dbBurger =>{
        console.log (dbBurger);
        //redirect
        res.redirect('/');
    });
});

router.put('/burgers/update', (req, res) =>{
    //update devoured to true
    Burger.update({
        devoured:true
    },
    {
        where:{
            id : req.body.burger_id
        }
    }).then(dbBurger =>{
        console.log(dbBurger)
        res.json('/');
    });
});

module.exports = router;