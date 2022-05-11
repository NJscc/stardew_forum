const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init({
    
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        Unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[8]
        }
    } 
},
  {
    hooks:{
        beforeCreate:async userdata=>{
            userdata.password = await bcrypt.hash(userdata.password,5)
            return userdata
        }},
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
