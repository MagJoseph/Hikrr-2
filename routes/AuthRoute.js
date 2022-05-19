const router = require("express").Router();
const controller = require("../controllers/AuthController");

//Auth Controller Routes
router.post("/login", controller.Login);
router.post("/register", controller.Register);

//Export
module.exports = router;
