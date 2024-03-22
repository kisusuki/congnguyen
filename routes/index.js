//khai bao thu vien express
const express = require('express');
//khai bao router (dinh tuyen) => set path cho web
const router = express.Router();

//khai báo homepage(local host 3000)
router.get('/', (req, res) => {
  // let year = 2024;
  // let university = "greenwich";
  //1. respond bằng console
  // console.log("this is homepage");
  //2. respond với "send"
  // res.send("<h1>This is homepage</h1>")
  //respond với "render" : render ra 1 web hoàn chỉnh
  res.render('index', {year: 2024, university: "Greenwich"});
})
//khai báo trong demo (localhos)
router.get('/hanoi', (req,res) =>{
  res.render('greenwich/hanoi');
})
router.get('/hcm', (req,res) =>{
  res.render('greenwich/hcm');
})
router.get('/danang', (req,res) =>{
  res.render('greenwich/danang');
})
router.get('/cantho', (req,res) =>{
  res.render('greenwich/cantho');
})


//support module => bắt buộc
module.exports = router;