const express = require('express')
const {
    getAll,
    getOne,
    createData,
    updateData,
    deleteData,
} = require('../controller/ActivityTemplateDetailController')

const router = express.Router()

//get all
router.get('/', getAll)

//get one
router.get('/:id', getOne)

//create data
router.post('/', createData)

//update data
router.patch('/:id', updateData)

//delete data
router.delete('/:id', deleteData)

module.exports = router