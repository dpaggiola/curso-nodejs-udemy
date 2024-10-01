// ! Importación de módulos 
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// require('./js-foundation/05-factory');

const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(1)
.then((pokemon) => console.log({pokemon}))
.catch((error) => console.error('Por favor intende de nuevo'))
.finally(() => console.log('Finalmente'));

// ! Referencia a la función factory y uso
// const { getUUID, getAge } = require('./plugins');

// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = {name: 'John', birthdate: '1986-09-24'};

// const john = makePerson(obj);

// console.log({ john });


// ! Primeras clases 
// const id = 3;

// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }

//   console.log(user);
// });

