const mongoose = require("mongoose")

const coursePoints = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  points:{
    type:Number,
    default:0
  }
})

module.exports = mongoose.model("coursePoints", coursePoints)