const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  imageUri: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Virtual field to populate associated orders

const PersonalDetails = mongoose.model('PersonalDetails', ProfileSchema);

module.exports = PersonalDetails;
