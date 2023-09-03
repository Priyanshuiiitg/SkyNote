const mongoose = require('mongoose');
const URI="mongodb://0.0.0.0:27017/skynote?readPreference=primary&directConnection=true";
// const URI='mongodb+srv://hello_world:hello_world123@cluster0.pzzvmfn.mongodb.net/?retryWrites=true&w=majority'
async function connectToDatabase() {
  try {
    await mongoose.connect(URI);
    console.log('Connected to the database');
    // Continue with your code here
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports =connectToDatabase;
