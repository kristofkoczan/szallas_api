const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post("/", (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
        });
    user.save().then(result => {
        res.json(user);
    })
    .catch(err => {
        res.json({"error": "username already in use"});
    })
});

router.get("/", (req, res) => {
    User.find()
    .exec()
    .then(async(users) => {
        res.json(users);
        return;
    })
    .catch(err => {
        res.json({"error": err});
        return;
    })
}
);

module.exports = router;