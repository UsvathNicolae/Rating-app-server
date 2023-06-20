const Sequelize = require("sequelize");
const sequelize = require("../configs/sequelize/connection");
const {Receipt} = require("../models");
const Rating = require("../models/rating")(sequelize, Sequelize.DataTypes);

const createRating = (payload) => {
    console.log(payload)
    return Rating.create(payload)
}

const update = async (id, payload) => {
    const rating = await Rating.findOne({where: {id}})

    if(!rating) {
        throw new Error('Unable to find rating')
    }

    const response = await rating.update(payload)

    return response.toJSON()
}

const getAllRatings = async (filters) => {
    let queryFilters = {}
    console.log(filters)

    if(filters && filters.licencePlate) {
        queryFilters = { ...queryFilters, licencePlate: filters.licencePlate }
    }

    return Rating.findAll({
        where: {
            ...queryFilters
        }
    })
}

const deleteRating = async (id) => {
    await Receipt.destroy({ where: { ratingId: id  } })

    return Rating.destroy({ where: { id } })
}

const fetchById = async (id) => {
    return Rating.findByPk(id)
}

module.exports = { createRating, getAllRatings, update, deleteRating, fetchById }