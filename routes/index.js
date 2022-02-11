var express = require('express');
var router = express.Router();
const userModel = require('./users')


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/services', function(req, res, next) {
  userModel.find()
  .then(function(survyedUser){
    res.render('services',{survyedUser})
  })
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/survey',function(req,res){
  userModel.create({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    age:req.body.age,
    test:req.body.covidePositive,
    Dose1:req.body.dose1,
    Dose2:req.body.dose2,
    details:req.body.details
  })
  .then(function(survyedUser){
    res.redirect('/services')
  })
})

router.get('/delete/:userid',function(req,res){
  userModel.findOneAndDelete({_id:req.params.userid})
  .then(function(user){
    res.redirect("/services")
  })
})

router.get('/edit/:userid',function(req,res){
  userModel.findOne({_id:req.params.userid})
  .then(function(user){
    res.render('survey',{content:user})
  })
})

router.post('/edit/:userid',function(req,res){
  var data={
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    age:req.body.age,
    test:req.body.covidePositive,
    Dose1:req.body.dose1,
    Dose2:req.body.dose2,
    details:req.body.details
  }
  userModel.findOneAndUpdate({_id:req.params.id},data)
  .then(function(updated){
    res.redirect('/services')
  })
})

module.exports = router;
