const RatingRepository = require('../repository/ratingRepository')
const UserRepository = require('../repository/userRepository')
const {User} = require("../models");
const sequelize = require("../configs/sequelize/connection");
const Sequelize = require("sequelize");
const {createRating, fetchById} = require("../repository/ratingRepository");
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

const likeRating = async (req, res) =>{
    const { id } = req.params
    const payload = req.body;

    const rating = await fetchById(id)
    if(payload.userId){
        if(!rating.likedBy.includes(payload.userId)){
            rating.likedBy =  `${rating.likedBy},${payload.userId}`
        }else{
            const regex = new RegExp(`,${payload.userId}`)
            rating.likedBy = rating.likedBy.replace(regex,'')
        }
        await RatingRepository.update(id, {likedBy: rating.likedBy})
    }
    return res.status(200).json({
        message: 'Rating liked'
    })
}

const setSeenRatings = async (req, res) =>{
    const payload = req.body;
    console.log(payload)
    if(payload.userId){
        let ratings = await RatingRepository.getAllRatings()
        ratings.map(async (rating) =>{
            if(!rating.seenBy.includes(payload.userId)){
                rating.seenBy = `${rating.seenBy},${payload.userId}`
                await RatingRepository.update(rating.id, {seenBy: rating.seenBy})
            }
        })
    }
    return res.status(200).json({
        message: 'Ratings seen'
    })
}


module.exports = { postRating, getAll, updateRating, deleteRating, likeRating, setSeenRatings }