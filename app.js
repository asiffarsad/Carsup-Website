const express = require("express");
const session = require("express-session");
const ejsMate = require("ejs-mate");
const path = require("path");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const expressURLencoded = require("express").urlencoded;
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const passport = require("passport");
const errorLogger = require("./utils/errorLogger");

const app = express();

// Use global error handler with the error logger
app.use((err, req, res, next) => {
    errorLogger(err);
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Connect to the database (replace with environment variables)
const dbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/";
mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to the database"))
    .catch((error) => {
        console.error("Database connection error: " + error);
        errorLogger(error);
    });

// Configure the session
const sessionConfig = require("./utils/session");
app.use(session(sessionConfig));

// Set up EJS-mate as the view engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

// Set the directory where EJS files are stored
app.set("views", path.join(__dirname, "views"));

// Set the directory where static assets are stored
app.use(express.static(path.join(__dirname, "assets")));

// Serve the favicon (uncomment if you have a favicon.ico in your assets folder)
// app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));

// Set up flash messages
app.use(flash());

// Parse request bodies (Express has integrated bodyParser)
app.use(expressURLencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Override HTTP methods using the `_method` parameter
app.use(methodOverride("_method"));

// Initialize Passport
app.use(passport.initialize());

// Restore authentication state from the session
app.use(passport.session());

// Set up the Passport strategies for user authentication
require("./utils/passport")(passport);

// Import the public and admin route modules
const publicRoutes = require("./routers/general/index");
const adminRoutes = require("./routers/staff/index");

// Use global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Use the public routes as the default routes for the app
app.use(publicRoutes);

// Use the admin routes with a prefix of '/admin'
app.use("/admin", adminRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});
