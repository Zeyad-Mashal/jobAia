const express = require('express')
const mongoose = require("mongoose");
require("dotenv").config();
const app = express()

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allRoutes = require('./Routes/routes');
app.use(allRoutes);


app.get('/', (req, res) => res.send('Hello World!'))


const port = process.env.PORT;
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(port, console.log(`http://localhost:${port}`));
}).catch((err) => {
  console.log(err);
});
