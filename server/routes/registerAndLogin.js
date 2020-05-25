var express = require("express");
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');

const {registerValidation,loginValidation} = require('../validation')
const router = express.Router()

const authSchema = require('../model/authmodel')


router.post('/register',async function(req,res){
    const {error} =  registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    
    const emailExist = await   authSchema.findOne({Email : req.body.Email})  
    if(emailExist) return res.status(400).send("email alredy exist");


    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.Password , salt)
const newauthSchema = new authSchema({
            Username:req.body.Username,
            Email:req.body.Email,
            Password:hash
})
.save()
.then(data =>{
    res.json(data)
})
.catch(err =>{
    res.json(err)
})

})


router.post('/login',async function(req,res){
    const {error} =  loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    
    const emailExist = await   authSchema.findOne({Email : req.body.Email})  
    if(!emailExist) return res.status(400).send("email doesnt exist exist");
    
const compare = await bcrypt.compare(req.body.Password,emailExist.Password)
if(!compare)  return res.status(400).send("password is wrong");

res.send('logged in')

})


router.get('/register',async function(req,res){
  try {
    let getPost = await authSchema.find();
      res.json(getPost)
  } catch (error) {
    res.send(error)
}

})

module.exports = router