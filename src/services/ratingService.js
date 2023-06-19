const RatingRepository = require('../repository/ratingRepository')
const UserRepository = require('../repository/userRepository')
const {User} = require("../models");
const sequelize = require("../configs/sequelize/connection");
const Sequelize = require("sequelize");
const {createRating} = require("../repository/ratingRepository");
const USER = require('../models/user')(sequelize, Sequelize.DataTypes);

const getAll = async (req, res) => {
    const filters = req.query

    let ratings = await RatingRepository.getAllRatings(filters)


    return res.status(200).send(ratings)
}

const updateRating = async (req, res) => {
    const { id } = req.params
    const payload = req.body

    const updatedRating = RatingRepository.update(id, payload)

    return res.status(200).send(updatedRating)
}

const deleteRating = async (req, res) => {
    const { id } = req.params

    await RatingRepository.deleteRating(id)

    return res.status(200).send()
}

const postRating = async (req, res) => {
    const payload = req.body;
    try {
        const result = await createRating(payload);
        if(result){
            res.status(200).json({
                message: 'New rating successfully added'
            })
        }
    } catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};



module.exports = { postRating, getAll, updateRating, deleteRating }