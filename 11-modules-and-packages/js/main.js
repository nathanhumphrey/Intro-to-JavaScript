import {MODULE_VAR as moduleVar, fetchJSON} from './my-modules.js';

console.log('From main.js', moduleVar);

fetchJSON('https://dog.ceo/api/breeds/image/random', (dogInfo) => {
  console.table(dogInfo);
});
