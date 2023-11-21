const fs = require("fs");
const path = require("path");

// Define the log file path
const logFilePath = path.join(__dirname, "../logs/error.log");

// Error logger function
const errorLogger = (error) => {
    // Create a timestamp for the log entry
    const timestamp = new Date().toISOString();

    // Create the log message
    const logMessage = `[${timestamp}] ${error.stack}\n`;

    // Append the log message to the error log file
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error("Error writing to error log:", err);
        }
    });
};

module.exports = errorLogger;
