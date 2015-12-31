var express = require('express');

var router  = express.Router();

//define routes
var toDoItems = [
  {id:1,desc:"foo"},
  {id:2, desc:"bar"},
  {id:3, desc:"baz"}
];

router.post("/add",function(req,res){
      var newItem =  req.body.newItem;
      //console.log(newItem);
      toDoItems.push({
          id:toDoItems.lenght+1,
          desc : newItem
      });

      res.redirect('/todo');
});

router.get("/",function(req,res){
    res.render('index',{
      title:'Dynamic Title',
      items :toDoItems
    });
});

module.exports = router;
