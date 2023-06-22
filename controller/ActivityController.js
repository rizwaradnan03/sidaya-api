const Activity = require('../models/ActivityModel')
const BaseResponse = require('./BaseResponseController')

const getAll = async (req, res) => {
    try {
        const data = await Activity.findAll()

        if (data === null) {
            return res.status(400).json({ code: 400, message: 'Data Not Found' })
        }
        const response_data = BaseResponse(data)

        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

const getOne = async (req, res) => {
    try {
        const data = await Activity.findOne({
            where: {
                id: req.params.id
            },
        })

        if (data === null) {
            return res.status(400).json({ code: 400, message: 'Data Not Found' })
        }
        const response_data = BaseResponse(data)
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

        const data = await Activity.create(req.body)
        const response_data = BaseResponse(data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

const updateData = async (req, res) => {
    try {
        const data = await Activity.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        const response_data = BaseResponse(data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

const deleteData = async (req, res) => {
    try {
        const data = await Activity.destroy({
            id: req.params.id
        })
        const response_data = BaseResponse(data)
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

//testinggggggggggggggg