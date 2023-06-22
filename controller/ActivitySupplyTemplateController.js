const ActivitySupplyTemplate = require('../models/ActivitySupplyTemplateModel')
const BaseResponse = require('./BaseResponseController')

const getAll = async (req, res) => {
    try {
        const data = await ActivitySupplyTemplate.findAll()

        if (data === null) {
            return res.status(400).json({ code: 400, message: 'Data Not Found' })
        }
        const response_data = BaseResponse(200,'Data Found',data)

        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

const getOne = async (req, res) => {
    try {
        const data = await ActivitySupplyTemplate.findOne({
            where: {
                id: req.params.id
            },
        })

        if (data === null) {
            return res.status(400).json({ code: 400, message: 'Data Not Found' })
        }
        const response_data = BaseResponse(200,'Data Found',data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

const createData = async (req, res) => {
    try {
        if (req.body === null) {
            return res.status(400).json({ code: 400, message: 'Data Not Found' })
        }

        const data = await ActivitySupplyTemplate.create(req.body)
        const response_data = BaseResponse(201,'Success Create',data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

const updateData = async (req, res) => {
    try {
        const data = await ActivitySupplyTemplate.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        const response_data = BaseResponse(201,'Success Update',data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

const deleteData = async (req, res) => {
    try {
        const data = await ActivitySupplyTemplate.destroy({
            id: req.params.id
        })
        const response_data = BaseResponse(201,'Success Delete',data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getAll,
    getOne,
    createData,
    updateData,
    deleteData,
}