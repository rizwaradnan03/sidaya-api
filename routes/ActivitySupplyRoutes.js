const express = require('express')
const {
    getView,
    getAll,
    getOne,
    createData,
    updateData,
    deleteData,
} = require('../controller/ActivitySupplyController')

const router = express.Router()

//get all
router.get('/', getAll)

//get all
router.get('/view', getView)

//get one
router.get('/:id', getOne)

//create data
router.post('/', createData)

//update data
router.patch('/:id', updateData)

//delete data
router.delete('/:id', deleteData)

module.exports = router