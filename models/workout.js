const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter exercise name",
      },
      duration: {
        type: Number,
        required: "Please enter how long what your workout",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
}
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;