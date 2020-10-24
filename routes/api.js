const express = require('express')
const router = express.Router();
const db = require('../models/index');

router.get("/", (req, res) => {
  res.send(index.html);
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((data) => {
      res.json(data);
  });
});

router.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body)
      .then(data => {
          console.log(data + "post data ");
          res.json(data);
      })
      .catch(({ error }) => {
          console.log(error);
      });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    {_id: req.params.id}, 
    {exercises: [req.body]}
    )
    .then(function (updatedWorkOut) {
      res.json(updatedWorkOut);
  });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).then((data) => {
      res.json(data);
  });
});

module.exports = router