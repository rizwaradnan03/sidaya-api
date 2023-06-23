const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const User = require('../models/UserModel')
const BaseResponse = require('./BaseResponseController')

const loginUser = async (req,res) => {
    const {username, password} = req.body

    try {
        const isUserValid = await User.findOne({
            where: {
                username: username
            }
        })
        if(!isUserValid){
            return res.status(400).json({message: 'User Not Found'})
        }

        const isPasswordValid = await bcrypt.compare(password, isUserValid.password)
        if(!isPasswordValid){
            return res.status(400).json({message: 'Password Is Not Valid'})
        }
        const secretKey = crypto.randomBytes(10).toString('hex')
        const token = jwt.sign({id: isUserValid.id}, secretKey)

        const updateUserToken = await User.update({token: token}, {
                where: {
                    id: isUserValid.id
                }
            })
                                                                  
        const response_data = BaseResponse(200,'Ok',updateUserToken)
        res.json(response_data)
    } catch (error) {
        console.log(error)
    }
}

const registerUser = async (req,res) => {
    const {username,password,confirmPassword} = req.body
    try {
        if(password !== confirmPassword){
            return res.status(400).json({message: 'Password Not Match'})
        }
        const isUserValid = await User.findOne({
            where: {
                username: username
            }
        })
        if(!isUserValid){
            const createUsername = username
            const hashPassword = await bcrypt.hash(password, 10)

            const data = await User.create({username: createUsername, password: hashPassword})
            const response_data = BaseResponse(201,'Success Create',data)

            res.json(response_data)
        }else{
            return res.status(400).json({message: "User Is Available!, try another username"})
        }
    } catch (error) {
        console.log(error.message)
    }
}

const logoutUser = async (req,res) => {
    try {
        const data = await User.update({token: null}, {
            where: {
                id: req.params.id
            }
        })

        if(!data){
            return res.status(400).json({message: 'Id Not Found'})
        }
        const response_data = BaseResponse(201,'Success Logout',data)
        res.json(response_data)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    loginUser,
    registerUser,
    logoutUser,
}