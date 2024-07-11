const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/phototheque', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

const photoRoutes = require('./routes/photoRoutes');
app.use('/photos', photoRoutes);

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
