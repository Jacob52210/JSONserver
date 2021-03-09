const router = require('express').Router();
let Excersise = require('../models/excersise.model');

router.route('/').get((req, res) => {
  Excersise.find()
    .then(excersises => res.json(excersises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExcersise = new Excersise({
    username,
    description,
    duration,
    date,
  });

  newExcersise.save()
    .then(() => res.json('Excersise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Excersise.findById(req.params.id)
    .then(excersise => res.json(excersise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Excersise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Excersise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Excersise.findById(req.params.id)
    .then(excersise => {
      excersise.username = req.body.username;
      excersise.description = req.body.description;
      excersise.duration = Number(req.body.duration);
      excersise.date = Date.parse(req.body.date);

      excersise.save()
        .then(() => res.json('Excersise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;