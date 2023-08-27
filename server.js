const db = require('./app/models');
const controller = require('./app/controllers/user.controller');

const run = async() => {
     const user1 = await controller.createUser({
         name: 'Nicolás Cáceres'
     });

    const user2 = await controller.createUser({
         name: 'Katherine Muñoz'
     });

    // //Proyecto
     const project1 = await controller.createProject(user1.id,{
         name: 'Proyecto de hospital'
     });

     await controller.createProject(user1.id, {
         name: 'Proyecto de claro'
     });

     const project2 = await controller.createProject(user2.id, {
         name: 'Proyecto X'
     });

     await controller.createProject(user2.id, {
         name: 'Proyecto Z'
     });

    await controller.createProject(user1.id, {
        name: 'Proyecto Y'
    });

    const user1Data = await controller.findUserById(user1.id);
    console.log(`>> Usuario id = ${user1Data.id} ${JSON.stringify(user1Data,null,2)}`);

    const projectData = await controller.findProjectById(project1.id);
    console.log(`>> Projecto id = ${projectData.id} ${JSON.stringify(projectData,null,2)}`);

    //obtener todos los usuarios
    const users = await controller.findAll();
    console.log(`>> Todos los usuarios = ${JSON.stringify(users,null,2)}`);
}

// db.sequelize.sync()
db.sequelize.sync({
    force: true
}).then(()=> {
    console.log('Eliminando y resincronizando la base de datos.');
    run();
});