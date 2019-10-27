var Telescope = require('./model');

async function all() {
    return Telescope.findAll();
}

async function byName(name) {
    console.log('index byName ', name);
    return Telescope.findAll(name);
}

async function create(name, type, country, city) {
    console.log('create index ', name);
    return Telescope.createTelescope(name, type, country, city);
}

async function deleteByName(name) {
    console.log('delete index ', name);
    return Telescope.deleteTelescope(name);
}

module.exports = {
    all,
    byName,
    create,
    deleteByName
};