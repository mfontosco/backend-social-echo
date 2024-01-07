'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  await queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password:{
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
  },
  updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
  },
  deleted_at: {
      type: Sequelize.DATE,
      allowNull: true,
  },
  });
},
async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('users');
}
  }

