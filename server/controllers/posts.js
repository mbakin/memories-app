const express = require('express');
const mongoose = require('mongoose');

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
  const { title, message, creator, selectedFile, tags} = req.body;

  const newPost = new Posts({title,
    message,
    creator,
    selectedFile,
    tags});

  try {
    await newPost.save();
    res.status(201).json(newPost);
  }catch (err) {
    res.status(400).json({
      message: err.message
    })
  }
}

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).send("No post with that id")

  const updatedPost = await Posts.findByIdAndUpdate(_id, { ...post, _id }, { new: true})

  res.json(updatedPost);
}

module.exports = { getPosts, createPost, updatePost }