require("dotenv").config();
module.exports = {
  development: {
    database: "hikrr2_development",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    database: "hikrr2_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    database: "hikrr2_production",
    host: "127.0.0.1",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      }
    }
  }
};