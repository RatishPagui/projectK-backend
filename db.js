require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            writeConcern: {
                w: 'majority', // or w: 1 for acknowledgment from the primary only
            },
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process with a failure code
    }
};

module.exports = connectToMongo;