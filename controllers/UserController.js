//Imports
const { Comment, Post, User, Time } = require("../models");
const { Op } = require("sequelize");

//Get Controllers
const GetAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAll({});
    res.send(allPosts);
  } catch (error) {
    throw error;
  }
};

const GetUser = async (req, res) => {
  try {
    const user = await User.findByPk(parseInt(req.params.user_id));
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const GetUserPosts = async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: { user_id: parseInt(req.params.user_id) },
    });
    res.send(userPosts);
  } catch (error) {
    throw error;
  }
};

const GetOnePost = async (req, res) => {
  try {
    const onePost = await Post.findByPk(parseInt(req.params.post_id));
    const getComments = await Comment.findAll({
      where: { post_id: parseInt(req.params.post_id) },
    });
    res.send({ onePost, getComments });
  } catch (error) {
    throw error;
  }
};

const GetAllComments = async (req, res) => {
  try {
    const getComments = await Comment.findAll({});
    res.send({ getComments });
  } catch (error) {
    throw error;
  }
};

const GetAllUsersInfo = async (req, res) => {
  try {
    const usernames = await User.findAll({
      attributes: ["username"],
      order: [["username", "ASC"]],
    });
    const emails = await User.findAll({
      attributes: ["email"],
    });
    res.send({ usernames, emails });
  } catch (error) {
    throw error;
  }
};

const GetTimes = async (req, res) => {
  try {
    const times = await Time.findAll({});
    res.send(times);
  } catch (error) {
    throw error;
  }
};

//Create Controllers

const CreatePost = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    let postBody = {
      user_id,
      ...req.body,
    };
    const newPost = await Post.create(postBody);
    res.send(newPost);
  } catch (error) {
    throw error;
  }
};

const CreateTime = async (req, res) => {
  try {
    let timeBody = {
      ...req.body,
    };
    const newTime = await Time.create(timeBody);
    res.send(newTime);
  } catch (error) {
    throw error;
  }
};

const CreateComment = async (req, res) => {
  try {
    const post_id = parseInt(req.params.post_id);
    const commentBody = {
      post_id,
      ...req.body,
    };
    const newComment = await Comment.create(commentBody);
    res.send(newComment);
  } catch (error) {
    throw error;
  }
};

//Update Controllers
const UpdatePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.post_id);
    let updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true,
    });
    res.send(updatedPost);
  } catch (error) {
    throw error;
  }
};

//Delete Controllers

const DeletePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.post_id);
    let deletedPost = await Post.destroy({ where: { id: postId } });
    res.send({ message: `Deleted post with an id of ${postId}` });
  } catch (error) {
    throw error;
  }
};

//Search

const FindPost = async (req, res) => {
  try {
    let searchQuery = req.params.searchQuery;
    const find = await Post.findAll({
      where: {
        title: {
          [Op.like]: `%${searchQuery}%`,
        },
      },
    });
    if (find) {
      return res.send(find);
    }
  } catch (error) {
    throw error;
  }
};

//Exports
module.exports = {
  GetAllPosts,
  GetAllUsersInfo,
  GetOnePost,
  CreatePost,
  CreateComment,
  GetTimes,
  CreateTime,
  GetUserPosts,
  UpdatePost,
  GetUser,
  DeletePost,
  GetAllComments,
  FindPost,
};
