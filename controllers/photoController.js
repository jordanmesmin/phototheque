const Photo = require('../models/photo');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

exports.upload = upload.single('image');

exports.addPhoto = (req, res) => {
  const newPhoto = new Photo({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    image: req.file.path
  });
  newPhoto.save()
    .then(() => res.redirect('/photos'))
    .catch(err => res.status(400).send(err));
};

exports.getPhotos = (req, res) => {
  Photo.find({})
    .then(photos => res.render('photos', { photos }))
    .catch(err => res.status(400).send(err));
};

exports.getPhoto = (req, res) => {
  Photo.findById(req.params.id)
    .then(photo => res.render('editPhoto', { photo }))
    .catch(err => res.status(400).send(err));
};

exports.editPhoto = (req, res) => {
  Photo.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/photos'))
    .catch(err => res.status(400).send(err));
};

exports.deletePhoto = (req, res) => {
  Photo.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/photos'))
    .catch(err => res.status(400).send(err));
};
