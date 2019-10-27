var path = require('path');
var Sequelize = require('sequelize');
var Model = Sequelize.Model;
var db = require(path.join(__dirname, '../../db/'));

class Telescope extends Model {}

Telescope.init({
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : { 
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    type : {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, { sequelize : db, timestamps : true, modelName : "Telescope" });

async function createTelescope(name, type, country, city) {
    console.log('create model ', name);
    return Telescope.create({name: name, type: type, country: country, city: city})
                .then((telescope) => { return telescope });
}

async function findAll(name) {
    console.log('model find all name ', name);
    if (name) {
        return Telescope.findAll({
            where: {
                name: name
            }
        })
            .then((telescopes) => {return telescopes[0]});
    } else {
        return Telescope.findAll()
            .then((telescopes) => {return telescopes});
    }
}

async function deleteTelescope(name) {
    console.log('delete model ', name);
    return Telescope.destroy({
        where: {
            name: name
        }
    })
        .then((telescope) => { return telescope });
}

module.exports = {
    createTelescope,
    deleteTelescope,
    findAll
};