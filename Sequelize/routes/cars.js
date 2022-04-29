var express = require('express');
var router = express.Router();
const carscontroller = require('../controller/carscontroller')

/* GET users listing. */
router.get('/', carscontroller.getAllCars);
router.get('/cari', carscontroller.searchCars);
router.post('/tambah', carscontroller.AddCars);
router.delete('/delete/:id', carscontroller.DeleteCars);
router.put('/update/:id', carscontroller.updateCars);


module.exports = router;