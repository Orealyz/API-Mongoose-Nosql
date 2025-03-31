const express = require('express');
const router = express.Router();
const { getAllProfiles, createProfile } = require('./controller'); // Importation des méthodes

// Route pour récupérer tous les profils
router.get('/profiles', getAllProfiles);

// Route pour créer un profil
router.post('/profiles', createProfile);  // Ajout de la route POST pour créer un profil

module.exports = router;

