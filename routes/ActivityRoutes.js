const express = require('express')
const {
    getView,
    getAll,
    getOne,
    createData,
    updateData,
    deleteData,
} = require('../controller/ActivityController')

const router = express.Router()

//get all
router.get('/view', getView)

//get all
router.get('/', getAll)

//get one
router.get('/:id', getOne)

//create data
router.post('/', createData)

//update data
router.patch('/:id', updateData)

router.delete('/:id', deleteData)

module.exports = router