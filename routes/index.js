var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/puzzle', function(req, res, next) {
  
  let result=0;

  let obj = req.body;
  let sumpickuptime = 0;
  let sumpackagetime = 0;
  for(let i=0;i<obj.length;i++){
    sumpackagetime += obj[i].packaging_time;
    sumpickuptime += obj[i].pickup_time;
  }
  var lowest = Number.POSITIVE_INFINITY;
  let init = (sumpackagetime>sumpickuptime)?sumpackagetime:sumpickuptime;
  if(sumpackagetime>sumpickuptime){
    for(let j=0;j<obj.length;j++){
      if(lowest>obj[j].pickup_time){
        lowest = obj[j].pickup_time
      }
    }
  }
  else{
    for(let j=0;j<obj.length;j++){
      if(lowest>obj[j].packaging_time){
        lowest = obj[j].packaging_time
      }
    }
  }
  result = init+lowest;
    res.status(200).send({leasttime:result});
  });


  

module.exports = router;
