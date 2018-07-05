const express = require('express');
const md5 = require('md5');
const router = express.Router();
const Contact = require('../models/contacts');
var gmailNode = require('gmail-node');
var clientSecret = {
  installed:
  {client_id:"732048908099-rh2sqlpmftgs1leri6l22vu27ipc2vsg.apps.googleusercontent.com",
  project_id:"angular-vortex-209306",
  auth_uri:"https://accounts.google.com/o/oauth2/auth",
  token_uri:"https://accounts.google.com/o/oauth2/token",
  auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
  client_secret:"vOWzhgSa0DqkCjHkcK6-nePQ",
  redirect_uris:["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
}
};
gmailNode.init(clientSecret, '../token.json', function(err,data){
  if(err) throw err;
  console.log(data);
});

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
    Contact.findOne({username : req.body.username},function(err,contacts){
        if(contacts!=null)
        {
          return res.json({msg : 'beta tu lot ja'});
        }
    });
    var emailMessage = {
      to: req.body.email,
      subject: 'Test Subject',
      message: '<h1>Thanks for registering</h1>'
  };
   gmailNode.sendHTML(emailMessage, function (err, data) { 
    if(err) throw err;
    console.log(data);

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
