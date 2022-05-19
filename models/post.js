'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
  
    static associate(models) {
       Post.belongsTo(models.User, {
         foreignKey: 'user_id',
         as: 'user',
         onDelete: 'CASCADE',
         onUpdate: 'CASCADE',
       }),
         Post.hasMany(models.Comment, {
           foreignKey: 'post_id',
           as: 'post',
           onDelete: 'CASCADE',
           onUpdate: 'CASCADE',
         });
    }
  }
  Post.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      distance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      elevation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mapUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      park: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  );
  return Post;
};