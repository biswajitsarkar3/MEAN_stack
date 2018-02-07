const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retrieving employee
router.get('/contacts', (req,res,next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
  
});
//add contact
router.post('/contact',(req,res,next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Fail to add'});
        }
        else{
            res.json({msg: 'contact added sucessfully'});
        }
    });
 });

 //delete contacts
router.delete('/contact/:id',(req,res,next)=>{

    Contact.remove({_id: req.param.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });   
});

module.exports = router;