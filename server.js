// Imports
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const middleware = require("./middleware");

//Middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//Controllers
const userController = require("./controllers/UserController");
const authController = require("./controllers/AuthController");

//All Routes
app.get("/", (req, res) => res.json({ message: "Server Works" }));

//auth
app.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  authController.CheckSession
);
app.post("/login", authController.Login);
app.post("/register", authController.Register);

//get
app.get("/posts", userController.GetAllPosts);
app.get("/users/:user_id", userController.GetUser);
app.get("/posts/postdetail/:post_id", userController.GetOnePost);
app.get("/comments", userController.GetAllComments);
app.get("/posts/:user_id", userController.GetUserPosts);
app.get("/users_info", userController.GetAllUsersInfo);
app.get("/times", userController.GetTimes);
app.get("/search/:searchQuery", userController.FindPost);


//post
app.post("/posts/:user_id", userController.CreatePost);
app.post("/times", userController.CreateTime);
app.post("/comments/:post_id", userController.CreateComment);

//update
app.put("/posts/:post_id", userController.UpdatePost);

//delete
app.delete("/posts/:post_id", userController.DeletePost);

//Express Server
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
