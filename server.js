const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true });

const apiRoutes = require('./routes/api');
app.use('/', apiRoutes);
const htmlRoutes = require('./routes/view');
app.use('', htmlRoutes );

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});