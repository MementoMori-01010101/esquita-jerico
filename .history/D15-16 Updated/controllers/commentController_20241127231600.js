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

  try {
    const { blogId } = req.params;

    const blog = await Blog.findById(blogId).populate("author", "name");
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    const comments = await Comment.find({ blog: blogId })
      .populate("user", "name")
      .populate("blog", "_id content title author");

    if (!comments || comments.length <= 0)
      return res.status(404).json({ error: "Comments by blog not found" });

    res.status(200).json({
      message: "Comments by blog post retrieved successfully.",
      comments,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a Comment
const deleteComment = async (req, res) => {
  // TODO: Implement the functionality to delete a specific comment
};

export { addComment, getCommentsByBlog, deleteComment };
