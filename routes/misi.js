var express = require('express');
var router = express.Router();
var path = require('path');
var db = require ("../db/db")

// db.all('SELLECT * FROM MissionPlan', (err, rows) => {
//   console.log(rows)
// })

//tantangan
//buat endpoint get buat mendapatkan
//yg ada di mission plan
//router.get(), 'SELECT * FROM MissionPlan',

// route.get()
// fungsi db.all()
//kirim rows dari callback db.all() res.json
// contoh res.json(rows)
router.get('/', function (req, res, next) {
db.all('SELECT * FROM MissionPlan',(err, rows) => {
    if(err){
     console.log(err)
     res.status(500).json({status :'error'})
     return    
        }
        res.json(rows)
    });
})
router.post('/', function(req, res, next) {
  db.run(`INSERT INTO MissionPlan(planName, g3wp) VALUES (?, ?)`,
         [req.body.namaMisi, req.body.geoJSON],
         (err) => {
           if (err) {
             console.log(err)
             res.status(500).json({status: 'error'})
             return
            };
            res.status(200).json({status: 'OK'})
         })
})
// router.get('/delete/:id', (req, res, next)=>{
//     console.log(req.params.id)
    //Tantangan : 
    //Pakai query DELETE
    // db.run()
router.get('/delete/:id', function(req, res) {
    let id = req.params.id
    db.run(`DELETE FROM MissionPlan WHERE planId = ${id}`, (err)=> {
        if (err) {
            console.log(err)
            return res.status(500).json({
                status: 'error'
            })
        }
    res.status(200).json({status : 'deleted'})
    })
});




module.exports = router;
