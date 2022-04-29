const {cars} = require('../models');
const db = require('../models');
const Op = db.Sequelize.Op;

module.exports = class {
    static AddCars(req, res, next){
        cars.create({
            name: req.body.name,
            sewa: req.body.sewa,
            ukuran: req.body.ukuran,
            foto: req.body.foto
        })

        .then((result) => {
            res.status(201).send({
                status: 201,
                message: 'Cars Berhasil Ditambah',
                data: result,
            })
        }) 
        .catch((err) => {
            res.status(400).send(err)
        })
    }  
    
    static getAllCars(req, res, next){
        cars.findAll()
        .then((result) => {
            /* res.status(201).send({
                status: 201,
                message: 'Semua Data Sudah Tampil',
                data: result,
            }) */
            res.render('tampilan/main-layout',{data:result})
        })
        .catch((err) => {
            res.status(400).send(err)
        })
    }

    static DeleteCars(req, res, next){
        cars.findByPk(req.params.id)
        .then((result) => {
            return result
            .destroy()
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'Cars Berhasil Dihapus',
                })
            })
            .catch((error) => res.status(400).send(error));
        })
        .catch((err) => res.status(500).send(err))
    }

    static updateCars(req, res, next){
        cars.update({
                ...req.body
            },{
                where: {
                    id: req.params.id
                },
                returning: true,
            })
                .then((result) => {
                    res.status(201).send({
                    status: 201,
                    message: 'Data Car diupdate!',
                    data: result,
                })
            })
                .catch((err) => {
                    res.status(500).send(err)
                })
        }
    
    static searchCars(req, res, next){
        const name = req.query.name;
        var item = name ? { name: { [Op.like]: `%${name}%` } } : null;
        cars.findAll({ where: item })
        .then((result) => {
            res.status(201).send({
                status: 201,
                message: 'Data Cars Berhasil Ditampilkan',
                data: result,
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    }

}
