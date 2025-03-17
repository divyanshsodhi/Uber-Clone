const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }


    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    console.log("Cookies:", req.cookies);
    console.log("Headers:", req.headers.authorization);

    const token =
        (req.cookies && req.cookies.token) || 
        (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    if (!token) {
        console.log("No token found!");
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const isBlackListed = await blackListTokenModel.findOne({ token });
    if (isBlackListed) {
        console.log("Token is blacklisted!");
        return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);

        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            console.log("Captain not found in DB!");
            return res.status(401).json({ message: "Unauthorized: Captain not found" });
        }

        req.captain = captain;
        console.log("Captain Authorized:", captain);
        next(); // <----- Call next() to proceed to the controller
    } catch (err) {
        console.log("Invalid token error:", err.message);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
