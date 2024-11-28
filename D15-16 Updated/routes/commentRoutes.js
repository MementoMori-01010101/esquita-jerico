import express from "express";
import {
  addComment,
  getCommentsByBlog,
  deleteComment,
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/", addComment); // Add a comment
router.get("/:blogId", getCommentsByBlog); // Get comments for a blog
router.delete("/:commentId", deleteComment); // Delete a comment

export default router;
