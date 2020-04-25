'use strict';

const { Model, DataTypes } = require('sequelize')

class Article extends Model { }

module.exports = (sequelize) => {
  Article.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topic:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    intro:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'Article'
  })
  return Article
}