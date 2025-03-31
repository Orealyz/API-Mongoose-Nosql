const Profile = require('./model');

exports.getAllProfiles = async (req, res) => {
  try {
    const { skill, location } = req.query;
    const filter = {};
    if (skill) filter.skills = { $in: [skill] };
    if (location) filter['information.location'] = location;
    const profiles = await Profile.find(filter);
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    res.json(profile);
  } catch (err) {
    res.status(404).json({ message: "Profile not found" });
  }
};

exports.createProfile = async (req, res) => {
  const profileData = {
    name: req.body.name,
    email: req.body.email,
    skills: Array.isArray(req.body.skills) ? req.body.skills : [],  // S'assurer que skills est un tableau
    friends: Array.isArray(req.body.friends) ? req.body.friends : [] // S'assurer que friends est un tableau
  };

  const profile = new Profile(profileData);

  try {
    const newProfile = await profile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const deletedProfile = await Profile.findByIdAndUpdate(req.params.id, { $set: { deleted: true } });
    res.json(deletedProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Implémentation des autres méthodes pour expérience, skills, etc.

