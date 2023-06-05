const Sequelize = require("sequelize");
const sequelize = require("../configs/sequelize/connection");
const {Receipt} = require("../models");
const Rating = require("../models/rating")(sequelize, Sequelize.DataTypes);

const createRating = (payload) => {
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

    if(filters && filters.userId) {
        queryFilters = { ...queryFilters, userId: filters.userId }
    }

    return Rating.findAll({
        where: {
            ...queryFilters
        }
    })
}

const deleteRating = async (id) => {
    await Receipt.destroy({ where: { returnId: id  } })

    return Rating.destroy({ where: { id } })
}

const fetchById = async (id) => {
    return Rating.findByPk(id)
}

module.exports = { createRating, getAllRatings, update, deleteRating, fetchById }