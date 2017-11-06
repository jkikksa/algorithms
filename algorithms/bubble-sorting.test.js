const assert = require(`assert`);
const algorithm = require(`./bubble-sorting`);

const getRandomArray = (length, max) => {
  return [...new Array(length)].map(() => Math.floor(Math.random() * max));
};

describe(`Bubble-sorting`, () => {
  it(`25 элементов в массиве`, () => {
    const randomArray = getRandomArray(8, 10);
    const expectedArray = Array.from(randomArray).sort((a, b) => a - b);
    assert.deepEqual(algorithm(randomArray), expectedArray);
  });
});
