const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  company: String,
  dates: String,
  description: String
});

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  experience: [experienceSchema],
  skills: {
    type: [String], // Tableau de chaînes de caractères
    default: []     // Si aucun skill n'est donné, un tableau vide est utilisé
  },
  information: {
    bio: String,
    location: String,
    website: String
  },
  friends: {
    type: [mongoose.Schema.Types.ObjectId], // Tableau d'ObjectId
    ref: 'Profile',
    default: [] // Si aucun ami n'est donné, un tableau vide est utilisé
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

