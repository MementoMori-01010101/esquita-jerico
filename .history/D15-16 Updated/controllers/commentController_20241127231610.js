import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";

// Add a Comment
const addComment = async (req, res) => {
  // TODO: Implement the functionality to add a comment to a blog post
  try {
    const { blog, text } = req.body;

    const existingBlog = await Blog.findById(blog).populate("author", "name");
    if (!existingBlog) return res.status(404).json({ error: "Blog not found" });

    const comment = await Comment.create({
      blog,
      text,
      user: req.user._id,
    });

    res.status(201).json({ message: "Comment created successfully.", comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
  // TODO: Implement the functionality to retrieve comments for a specific blog post
};

// Delete a Comment
const deleteComment = async (req, res) => {
  // TODO: Implement the functionality to delete a specific comment
};

export { addComment, getCommentsByBlog, deleteComment };
