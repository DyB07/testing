var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req,res) => {
    res.render('index', {data: {}})
})
// router.get('/tambah', (req,res) => {
//     res.render('addcar', {data: {}})
// })
// router.get('/update', (req,res) => {
//     res.render('CarUpdate', {data: {}})
// })
// router.use('/cars', require('./cars'));


module.exports = router;
