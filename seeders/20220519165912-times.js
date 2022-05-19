"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("times", [
      {
        name: "Breakneck Mountain",
        content: "02:45:11",
        distance: "3.4 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Millbrook Ridge",
        content: "04:12:31",
        distance: "7.9 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("times", null, {});
  },
};
