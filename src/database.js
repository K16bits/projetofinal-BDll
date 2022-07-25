const mongoose = require("mongoose");

const local = "mongodb://localhost:27017/sistema";

(async () => {
  try {
    const db = await mongoose.connect(local); 
    console.log(`MongoDB connect: ${db.connection.name}`);
  } catch (e) {
    console.error(e);
  }
})();