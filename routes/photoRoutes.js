const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

// Assurez-vous que toutes les méthodes de photoController sont définies et correctement référencées
router.get('/', photoController.getPhotos);
router.get('/add', (req, res) => res.render('addPhoto'));
router.post('/add', photoController.upload, photoController.addPhoto);
router.get('/edit/:id', photoController.getPhoto);
router.post('/edit/:id', photoController.editPhoto);
router.post('/delete/:id', photoController.deletePhoto);

module.exports = router;
