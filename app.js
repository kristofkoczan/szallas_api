let app = require('express')();
let express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const userRoutes = require('./routes/user'); 
mongoose.connect('mongodb+srv://admin:admin@cluster0.jeyus.mongodb.net/Szallas?retryWrites=true&w=majority');

const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);

let port = process.env.PORT || 3000;

app.listen(port, () => console.log("server is up"));

module.exports = app;