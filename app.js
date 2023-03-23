import getData from './getData.js';

(async () => {
  const result = await getData(4);
  console.log(result);
})();