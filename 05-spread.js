const user = {
  firstName: 'Leonardo',
  lastName: 'Miranda',
  age: 26,
  instagram: '@leomiranda95_',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};

// Spread operator
// user.active = true;
// Object.assign(user, { active: true });

const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true,
}

console.log({updatedUser});