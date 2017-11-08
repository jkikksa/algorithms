const assert = require(`assert`);
const algorithm = require(`./bubble-sorting`);
const getRandomArray = require(`../utils/get-random-array`);

describe(`Bubble-sorting`, () => {
  it(`Случайный массив`, () => {
    const randomArray = getRandomArray();
    console.log(`Случайный массив ${randomArray}`);
    const expectedArray = Array.from(randomArray).sort((a, b) => a - b);
    console.log(`Ожидаемый массив ${expectedArray}`);
    assert.deepEqual(algorithm(randomArray), expectedArray);
  });
});
