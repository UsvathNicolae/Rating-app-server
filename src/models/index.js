const Sequelize = require('sequelize');
const dbConnection = require('../configs/sequelize/connection');

const UserModel = require('./user');
const RatingModel = require('./rating');


const User = UserModel(dbConnection, Sequelize);
const Rating = RatingModel(dbConnection, Sequelize);

Rating.belongsTo(User, {
    foreignKey: {
        name: 'userId',
    },
    as: 'user'
})

module.exports = {User, Rating };