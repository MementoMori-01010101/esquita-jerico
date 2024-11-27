import Blog from "../models/Blog.js";

// Create a new blog post
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const blog = await Blog.create({ title, content, author: req.user._id });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get a blog post by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id).populate("author", "name");
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { createBlog };
export { getBlogById };
import Blog from "../models/Blog.js";

// Create a new blog post
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const blog = await Blog.create({ title, content, author: req.user._id });
    res.status(201).json({ message: "Blog created successfully.", blog });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all blog posts
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name");
    res.status(200).json({ message: "Blogs retrieved successfully.", blogs });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get a blog post by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id).populate("author", "name");
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json({ message: "Blog retrieved successfully.", blog });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update Blog
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // const updatedBlog = await Blog.findByIdAndUpdate(id, {
    //   title,
    //   content,
    // });

    // if (!updatedBlog) {
    //   return res.status(404).json({ error: "Blog not found" });
    // }

    const blog = await Blog.findById(id);

    if (!blog) return res.status(404).json({ error: "Blog not found" });

    if (blog.author.toString() !== req.user._id)
      return res.status(403).json({ error: "Not authorized" });

    blog.title = title || blog.title;
    blog.content = content || blog.content;

    await blog.save();

    return res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete Blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // const updatedBlog = await Blog.findByIdAndDelete(id);

    // if (!updatedBlog) {
    //   return res.status(404).json({ error: "Blog not found" });
    // }

    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    if (blog.author.toString() !== req.user._id)
      return res.status(403).json({ error: "Not authorized" });

    await blog.deleteOne();

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };
