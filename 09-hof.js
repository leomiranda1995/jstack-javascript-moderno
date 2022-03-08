const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

/** .find -> retorna o primeiro em que a nossa condição retorna true */
const find = array.find((product) => product.name > 1000);
// console.log({ find });

/** .findIndex -> retorna em qual posição do nosso array o elemento está quando a nossa condição retorna true */
const findIndex = array.findIndex((product) => product.name ===  'Magic Mouse');
// console.log({ findIndex });

/** .some -> verifica se algum elemento do nosso array bate com a condição */
const some = array.some((product) => product.price < 1000);
// console.log({ some });

/** .every -> verifica se todos os elementos cumprem a regra da condição */
const every = array.every((product) => product.price >= 1000);
// console.log(every);