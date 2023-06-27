const db = require('../config/Database')
const Activity = require('../models/ActivityModel')
const BaseResponse = require('./BaseResponseController')

const getView = async (req,res) => {
    try {
        const query_data = await db.query("select activity.id as id, activity.description as description, activity.due_date as due_date, activity.related_area, periode.name from activity inner join periode on periode.id = activity.periode_id")
        const data = query_data[0]

        if (!data) {
            return res.status(400).json({ code: 400, message: 'Data Not Found.' })
        }
        const response_data = BaseResponse(200,'Data Found',data)

        res.json(response_data)
    } catch (error) {
        console.log(error)
    }
}

const getAll = async (req, res) => {
    try {
        const data = await Activity.findAll()

        if (!data) {
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
        const data = await Activity.findOne({
            where: {
                id: req.params.id
            },
        })

        if (!data) {
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
        if (!req.body) {
            return res.status(400).json({ code: 400, message: 'Data Not Found' })
        }

        const data = await Activity.create(req.body)
        const response_data = BaseResponse(201,'Success Create',data)
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
        const response_data = BaseResponse(201,'Success Update',data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

const deleteData = async (req, res) => {
    try {
        const data = await Activity.destroy({
            where: {
                id: req.params.id
            }
        })
        const response_data = BaseResponse(201,'Success Delete',data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getView,
    getAll,
    getOne,
    createData,
    updateData,
    deleteData,
}