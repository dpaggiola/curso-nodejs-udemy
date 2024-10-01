// const {getAge, getUUID} = require('../plugins');

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({name, birthdate}) => {
  
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      // age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
      age: getAge(birthdate),
    }
  }
}



// const obj = {name: 'John', birthdate: '1986-09-24'};

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
  buildMakePerson,
}