const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Burger extends Model{}

Burger.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        burger_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        
            sequelize,
            timestamps:true,
            freezeTableName: true,
            underscored: true,
            modelName : 'burger'
        
    }
);