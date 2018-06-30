const express = require('express');
const md5 = require('md5');
const router = express.Router();
const Contact = require('../models/contacts');
router.get('/contacts',(req,res,next)=>{
  Contact.find(function(err,contacts){
      res.json(contacts);
  });
});
router.post('/contactk',(req,res,next)=>{
  Contact.findOne({username : req.body.username},function(err,contacts){
      if(contacts==null)
      {
        return res.json({msg : 'beta tu lot ja'});
      }
    if(contacts.password == md5(req.body.password))
    {
      res.json(contacts);
    }
    else {
      res.json({msg : 'beta tu lot ja'});
    }
  });
});
router.post('/contact',(req,res,next)=>{
    let newContact = new Contact({
        first_name : req.body.first_name,
        last_name:req.body.last_name,
        phone : req.body.phone,
        email : req.body.email,
        username : req.body.username,
        password : md5(req.body.password),
        notes : [],
    });

    newContact.save((err,contact)=>{
        if(err)
        {
            res.json({msg : 'failed to load contact'});
        }
        else{
            res.json({msg : 'Contact added'});
        }
    });
    });


    router.delete('/contacts/:id',(req,res,next)=>{

        Contact.remove({_id : req.params.id},function(err,result){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(result);
            }
        });

        });


module.exports = router ;
