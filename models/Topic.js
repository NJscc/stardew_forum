const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Topic extends Model {}

Topic.init({
    
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    }, 

    text: {
        type: DataTypes.TEXT,
        allowNull: false  
    },

    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id'
        }
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
    }
}
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'topic',
  }
);

module.exports = Topic;
