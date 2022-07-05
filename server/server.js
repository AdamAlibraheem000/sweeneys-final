const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash')
const session = require('express-session')
const path = require('path');


require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
// Allows express to access form data
app.use(express.urlencoded({extended: false}))


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true
})

const connection = mongoose.connection;
connection.once("open", () => 
 console.log("Mongo connected"))

 const articlesRouter = require('./routes/articles');
 app.use('/articles',articlesRouter);

 if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.listen(port, () => console.log(`App running on port ${port}`));

