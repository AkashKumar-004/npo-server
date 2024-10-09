require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const DBCon = require("./CONFIG/db");
const router = require('./routes/Educationroute');
const router1=require('./routes/serviceroutes')
const router2=require('./routes/shelterroutes')
const blogs=require('./routes/blogsroute')
const donation=require('./routes/donationroute')
app.use(express.json());
app.use(cors());

console.log('Starting server...');

DBCon()
  .then(() => {
    console.log("Database connected successfully");
    const port = process.env.PORT || 7778;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });

app.use('/ngo1',router1)
app.use('/ngo', router);
app.use('/ngo2',router2)
app.use('/blog',blogs)
app.use('/donation',donation)
app.get('/', (req, res) => {
  res.json({ message: "message" });
});
