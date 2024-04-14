const express = require("express");
const {getAllComment, deleteComment, updateComment, getDetailComment, createComment, getAllCommentUser} = require("../backend-datVeXe/controllers/comment.controller");
const {checkExist} = require("../backend-datVeXe/middlewares/validations/checkExist");
const {Comment} = require("../models");

const CommentRouter = express.Router();

CommentRouter.post("/", createComment);
CommentRouter.get("/", getAllComment);
CommentRouter.get("/usercomment/:id", getAllCommentUser);

CommentRouter.get("/:id", getDetailComment);
CommentRouter.delete("/:id", deleteComment);
CommentRouter.put("/:id", checkExist(Comment), updateComment);

module.exports = {CommentRouter};
