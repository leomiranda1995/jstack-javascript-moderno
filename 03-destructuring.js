const user = {
  firstName: 'Leonardo',
  lastName: 'Miranda',
  full_name: 'Nome Completo',
  age: 26,
  instagram: '@leomiranda95_',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};

// const firstName = user.firstName;
// const age = user.age;
// console.log(firstName, age);

/* Destructuring */

const { firstName, age, skills, full_name: fullName } = user;
const [ primary, secondary, tertiary, quaternary ] = skills;

console.log(fullName);