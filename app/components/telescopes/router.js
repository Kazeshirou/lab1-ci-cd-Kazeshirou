
var express = require('express');
var router = express.Router();
var telescope = require('./');

router.get('/', async (req, res, next) => {
    return telescope.all()
        .then((telescopes) => {
            console.log('get telescopes ', telescopes)
            res.json({ 'telescopes': telescopes });
        })
        .catch((err) => {
            console.log("telescope get err: ", err);
            next(err);
        });
});

router.get('/:name', async (req, res, next) => {
    console.log('req.param', req.params);
    return telescope.byName(req.params.name)
        .then((telescope) => {
            console.log('get telescope by name ', telescope)
            res.json({ 'telescope': telescope });
        })
        .catch((err) => {
            console.log("telescope get by name err: ", err);
            next(err);
        });
});

router.post('/', async (req, res, next) => {
    return telescope.create(req.query.name, req.query.type, req.query.country, req.query.city)
        .then((telescope) => {
            console.log('put telescope ', telescope);
            res.json({ 'telescope': telescope });
        })
        .catch((err) => {
            console.log("telescope put err: ", err);
            next(err);
        });
});

router.delete('/:name', async (req, res, next) => {
    console.log('req.param', req.params);
    return telescope.deleteByName(req.params.name)
        .then((telescope) => {
            console.log('get telescope by name ', telescope)
            res.json({ 'number of destroied telescopes': telescope });
        })
        .catch((err) => {
            console.log("telescope delete by name err: ", err);
            next(err);
        });
});

module.exports = router;