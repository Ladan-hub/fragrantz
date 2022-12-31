'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Perfumes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      masterPerfumer: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      scentProfile: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      perfumeImg: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, options);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Perfumes', options);
  }
};
