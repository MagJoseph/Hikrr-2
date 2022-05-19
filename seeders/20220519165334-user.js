"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        userId: 1,
        firstName: "Geralt",
        lastName: "Of Rivia",
        username: "TheWitcher",
        email: "thewitcher@gmail.com",
        password: "imsohot123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        firstName: "Yennefer",
        lastName: "Vengerberg",
        username: "beautiful1",
        email: "yennefer@gmail.com",
        password: "pretty123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        firstName: "Jaskier",
        lastName: "Pankratz",
        username: "handsome101",
        email: "jaskier@gmail.com",
        password: "ilovegeralt",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        firstName: "Vesemir",
        lastName: "Papa",
        username: "KaerMorhen",
        email: "vesemir@gmail.com",
        password: "ilovegeralt",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        firstName: "Cirilla",
        lastName: "Riannon",
        username: "Ciri",
        email: "ciri@gmail.com",
        password: "powerful1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        firstName: "Cirilla",
        lastName: "Riannon",
        username: "Ciri",
        email: "ciri@gmail.com",
        password: "powerful1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        firstName: "Lambert",
        lastName: "Of Khaer Morhen",
        username: "Lambi",
        email: "lambert@gmail.com",
        password: "beastslayer1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
