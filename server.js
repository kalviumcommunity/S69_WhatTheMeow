const express = require('express');
const app = express();
const PORT = 3000;
const mongoose=require('mongoose');
require('dotenv').config();
app.use(express.json());
const MONGO_URI=process.env.MONGO_URI;


mongoose.connect(MONGO_URI).then(()=>console.log("Connected to database.")).catch((err)=>console.log('Failed: ',err));

app.get('/ping', (req, res) => {
  res.send('pong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});