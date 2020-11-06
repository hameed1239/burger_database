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
        return res.render('index', hbsObject)
    })
});

router.post('/burger/create', (req,res)=>{
    //handle creating a burger
    Burger.create({
        burger_name: req.body.burger_name
    }).then(dbBurger =>{
        res.redirect('/');
    })
})

router.put('/burger/update', (req, res) =>{
    //update devoured to true
    Burger.update({
        devoured:true
    },
    {
        where:{
            id : req.body.burger_id
        }
    }).then(dbBurger =>{
        res.json('/');
    });
});
