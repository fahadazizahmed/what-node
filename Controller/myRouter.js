var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

//simple get the view
router.get('/',function(req,res){
  res.render('index')
})
//get profiile of specific user
router.get('/profile/:name/:id',function(req,res){
  //if(req.params.name == 'fahad' && req.params.id == '1'){
      res.send("you want to get profile of "+req.params.name+" who's employee id is "+req.params.id);//http://localhost:4500/profile/fahad/1
  //}
  //else{
  //  res.send('not get your profile')
  //}

});

//get detail profile of specific person
router.get('/profile/:name',function(req,res){

  var personInfo = {
    age:24,
    cgpa:3.6,
    destination:'student',
    hobby:['playcricket','writning book','fighting','Fishing']
  };
  res.render('profile',{person:req.params.name , data:personInfo})

});

//use of query parameter
router.get('/myContact',function(req,res){
  //console.log(req.query);
  res.render('contact',{qs:req.query});//http://localhost:4500/myContact?person=fahadl&&dept=blockchain

});
// post data on form submit

router.post('/myContact',function(req,res){
res.render('contact-success',{data:req.body});

});

module.exports = router
