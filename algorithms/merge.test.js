const assert = require(`assert`);
const algorithm = require(`./merge`);

const firstArray = [3, 7];
const secondArray = [2, 8];

describe(`merge`, () => {
  it(`короткие массивы`, () => {
    assert.deepEqual(algorithm(firstArray, secondArray), [2, 3, 7, 8]);
  });
});
