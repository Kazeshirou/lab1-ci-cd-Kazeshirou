var Telescope = require('./model');

async function all() {
    return Telescope.findAll();
}

async function byName(name) {
    return Telescope.findAll(name);
}

async function create(name, type, country, city) {
    return Telescope.createTelescope(name, type, country, city);
}

async function deleteByName(name) {
    return Telescope.deleteTelescope(name);
}

module.exports = {
    all,
    byName,
    create,
    deleteByName
};