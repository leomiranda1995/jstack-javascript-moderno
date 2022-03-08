function minhaFunction() {
  this.name = 'Leonardo';

  const minhaArrowFunction = () => {
    this.lastname = 'Miranda';
  };

  minhaArrowFunction();
}

// console.log(new minhaFunction());

// console.log(this);

/*******************/

// function soma(...argumentos) {
//   console.log(argumentos);
// }

const soma = () => {
  console.log(arguments);
}

// soma(1, 2, 3, 4, 5, 6, 7, 'Leonardo');


// const getUser = () => {
//   return {
//     id: '123','
//     name: 'Leonardo'
//   }
// };

const getUser = () => ({
    id: '123',
    name: 'Leonardo'
  });

console.log(getUser());