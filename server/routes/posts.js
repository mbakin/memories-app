const express = require('express');

const { getPosts, createPost } = require('../controllers/posts');

const router = express.Router();

router.get('/', getPosts);


module.exports = { router };