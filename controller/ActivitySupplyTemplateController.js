const db = require('../config/Database')
const ActivitySupplyTemplate = require('../models/ActivitySupplyTemplateModel')
const BaseResponse = require('./BaseResponseController')

const getView = async (req,res) => {
    try {
        const query_data = await db.query("select activity_template.name as activity_template, supply.name as supply, activity_supply_template.qty as qty from activity_supply_template inner join activity_template on activity_template.id = activity_supply_template.activity_template_id inner join supply on supply.id = activity_supply_template.supply_id")
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
        const data = await ActivitySupplyTemplate.findAll()

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
        const data = await ActivitySupplyTemplate.findOne({
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