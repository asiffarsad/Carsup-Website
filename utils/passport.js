const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

module.exports = (passport) => {
    // Configure the local strategy for user authentication
    passport.use(
        new LocalStrategy(
            {
                usernameField: "email",
            },
            async (email, password, done) => {
                try {
                    const user = await User.findOne({ email });

                    if (!user) {
                        return done(null, false, {
                            message: "Email is not registered",
                        });
                    }

                    const isMatch = await user.comparePassword(password);

                    if (!isMatch) {
                        return done(null, false, {
                            message: "Invalid email or password",
                        });
                    }

                    return done(null, user);
                } catch (err) {
                    return done(err);
                }
            }
        )
    );

    // Configure Passport to serialize and deserialize users
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
};
