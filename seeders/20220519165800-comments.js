"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("comments", [
      {
        post_id: 1,
        username: "Geralt",
        comment: "This hike is great, but too difficult for Roach",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 2,
        username: "Jaskier",
        comment: "Beautiful, I will sing songs about it!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 3,
        username: "Yennefer",
        comment: "I had my first Ritual there. Would recommend",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 4,
        username: "Vesemir",
        comment: "Very long time ago there were monsters here.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 5,
        username: "Geralt",
        comment: "Perfect for a date",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 6,
        username: "Jaskier",
        comment: "I must write another song about this place!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 7,
        username: "Yennefer",
        comment: "I found my favorite Crystal here.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
