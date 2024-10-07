import { getAge } from '../plugins/get-age.plugin';
// const {getAge, getUUID} = require('../plugins');

interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({ getAge, getUUID }: BuildMakerPersonOptions) => {
  return ({name, birthdate}: PersonOptions) => {
  
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