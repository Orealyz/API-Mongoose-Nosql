const express = require('express');
const profileRoutes = require('./api/profiles');  // Maintenant que le fichier existe

const app = express();
app.use(express.json());
app.use('/api', profileRoutes);

module.exports = app;

