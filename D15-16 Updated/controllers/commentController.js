import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";

// Add a Comment
const addComment = async (req, res) => {
  // TODO: Implement the functionality to add a comment to a blog post
  try {
    const { blogId, content, author } = req.body;

    // Validate request data
    if (!blogId || !content || !author) {
      return res
        .status(400)
        .json({ error: "All fields are required: blogId, content, author" });
    }

    // Check if the blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // Create a new comment
    const comment = new Comment({ blogId, content, author });
    await comment.save();

    // (Optional) Update the blog to include this comment (if blogs track comment references)
    blog.comments.push(comment._id);
    await blog.save();

    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the comment" });
  }
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
  // TODO: Implement the functionality to retrieve comments for a specific blog post
  try {
    const { blogId } = req.params;

    // Check if the blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // Retrieve comments for the blog
    const comments = await Comment.find({ blogId }).sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching comments" });
  }
};

// Delete a Comment
const deleteComment = async (req, res) => {
  // TODO: Implement the functionality to delete a specific comment
  try {
    const { commentId } = req.params;

    // Find and delete the comment
    const comment = await Comment.findByIdAndDelete(commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // (Optional) Remove the comment reference from the associated blog
    const blog = await Blog.findById(comment.blogId);
    if (blog) {
      blog.comments = blog.comments.filter((id) => id.toString() !== commentId);
      await blog.save();
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the comment" });
  }
};

export { addComment, getCommentsByBlog, deleteComment };
