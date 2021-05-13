'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Manufactures', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      manufacture: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      createdAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},
      updatedAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Manufactures');
  },
};