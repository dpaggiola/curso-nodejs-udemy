const {v4: uuidv4} = require('uuid');
const getAge = require('get-age');

const buildPerson = ({name, birthdate}) => {
  
  return {
    id: uuidv4(),
    name: name,
    birthdate: birthdate,
    // age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    age: getAge(birthdate),
  }
}


const obj = {name: 'John', birthdate: '1986-09-24'};

const john = buildPerson(obj);

console.log(john);