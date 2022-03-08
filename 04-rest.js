const user = {
  firstName: 'Leonardo',
  lastName: 'Miranda',
  full_name: 'Nome Completo',
  age: 26,
  instagram: '@leomiranda95_',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};

// Rest operator
const { firstName, skills, ...restoUser } = user;
const [ primary, ...restoSkills ] = skills;

console.log(restoUser, restoSkills);