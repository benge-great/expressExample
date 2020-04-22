'use strict';

const { Model, DataTypes } = require('sequelize')

class Menu extends Model { }

module.exports = (sequelize) => {
  Menu.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('primary', 'secondary', 'child'),
      allowNull: false,
    },
    href: {
      type: DataTypes.STRING,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    tableName: 'Menu'
  })
  return Menu
}