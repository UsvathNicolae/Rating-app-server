'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rating extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Rating.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username:DataTypes.STRING,
        userId: DataTypes.INTEGER,
        description: DataTypes.STRING,
        stars: DataTypes.INTEGER,
        img: DataTypes.BLOB('long'),
        licencePlate: DataTypes.STRING,
        anonymous: DataTypes.BOOLEAN

    }, {
        sequelize,
        modelName: 'Rating',
    });
    return Rating;
};