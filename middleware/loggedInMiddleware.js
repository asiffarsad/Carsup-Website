// loggedInMiddleware.js

const loggedInMiddleware = (req, res, next) => {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
        // If authenticated, proceed to the next middleware or route handler
        return next();
    }

    // If not authenticated, redirect to the login page
    res.redirect("/login");
};

module.exports = loggedInMiddleware;
