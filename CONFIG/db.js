const mongoose = require('mongoose');

// Define the DBCon function
const DBCon = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

// Export the DBCon function
module.exports = DBCon;
