
const User = require('../models/userModel');
const mongoose = require('mongoose');

//login user
const loginUser = async (req, res) => {
    res.json({ mssg: 'login request' })
}


// signup user
const signupUser = async (req, res) => {
    res.json({ mssg: 'signup request' })
}


module.exports = {
    loginUser,
    signupUser
}