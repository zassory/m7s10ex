const db = require('./app/models');

const run = async() => {

}

// db.sequelize.sync()
db.sequelize.sync({
    force: true
}).then( ()=> {
    console.log('Eliminando y resincronizando la base de datos.');
    run();
})