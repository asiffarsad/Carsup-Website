const MongoDBStore = require("connect-mongo");

const mongoUrl = process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/";

const sessionConfig = {
    secret: process.env.SESSION_SECRET || "9HPLT@YV1cvKkuf$bcScXudPn",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
    store: MongoDBStore.create({
        mongoUrl,
        crypto: {
            secret:
                process.env.MONGO_STORE_SECRET || "3!j9xz@vDerJcwm#eMuMa1xs",
        },
        ttl: 30 * 24 * 60 * 60, // 30 days
    }),
};

module.exports = sessionConfig;
