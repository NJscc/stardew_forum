const { Model, DataTypes, DATE } = require('sequelize');

const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init({
    // define columns 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    text: {
      type: DataTypes.Text,
      allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
          }
    },

    creation_date: {
        type: DataTypes.DATE
    }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
