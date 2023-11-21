// loggedInStatusMiddleware.js

const loggedInStatusMiddleware = (req, res, next) => {
    // Check if the user is authenticated
    res.locals.isLoggedIn = req.isAuthenticated();
    next();
};

module.exports = loggedInStatusMiddleware;
