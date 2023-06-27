const db = require('../config/Database')
const ActivitySupply = require('../models/ActivitySupplyModel')
const BaseResponse = require('./BaseResponseController')

const getView = async (req,res) => {
    try {
        const query_data = await db.query("select supply.name as supply, activity.description as description, activity_supply.qty from activity_supply inner join supply on supply.id = activity_supply.supply_id inner join activity on activity.id = activity_supply.activity_id")
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
        const data = await ActivitySupply.findAll()

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
        const data = await ActivitySupply.findOne({
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

        const data = await ActivitySupply.create(req.body)
        const response_data = BaseResponse(201,'Success Create',data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

const updateData = async (req, res) => {
    try {
        const data = await ActivitySupply.update(req.body, {
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
        const data = await ActivitySupply.destroy({
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