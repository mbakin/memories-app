const { Posts } = require('../models/Posts'); 

const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find(); 
    
    console.log(posts);

    res.status(200).json(posts)
  }
  catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
} 

const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new Posts(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  }catch (err) {
    res.status(400).json({
      message: err.message
    })
  }
}

module.exports = { getPosts, createPost }