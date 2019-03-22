const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  src: {
    type: String,
    required: true
  },
  alt: String,
  imageData: Object,
  date: {
    type: Date,
    default: Date.now
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
