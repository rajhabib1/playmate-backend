const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: { type: String, required: true },
  breed: String,
  age: Number,
  profilePicture: String,
  medicalHistory: String,
  interests: [String],
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  // Add more fields as needed
});

module.exports = mongoose.model('Dog', dogSchema);
