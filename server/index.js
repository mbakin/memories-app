const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { router } = require('./routes/posts');
dotenv.config();

// Middleware
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

app.use('/posts',router);  

app.get('/', (req, res) => {
  res.send('Hello to Memories API !');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>  app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
  .catch(err => console.log(err));

console.log(`
  '-_-' '-_-''-_-''-_-''-_-''-_-' '-_-'
  
  '-_-' Connected DB successfully '-_-'
  
  '-_-' '-_-''-_-''-_-''-_-''-_-' '-_-'
`)
