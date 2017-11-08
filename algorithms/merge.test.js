const assert = require(`assert`);
const algorithm = require(`./merge`);
const getRandomArray = require(`../utils/get-random-array`);
const sortFn = (a, b) => a - b;

describe(`Функция Merge`, () => {
  it(`Случайные массивы`, () => {
    const firstArray = getRandomArray().sort(sortFn);
    console.log(`Первый массив ${firstArray}`);
    const secondArray = getRandomArray().sort(sortFn);
    console.log(`Второй массив ${secondArray}`);
    const expectedArray = [...firstArray, ...secondArray].sort(sortFn);
    console.log(`Ожидаемый массив ${expectedArray}`);
    assert.deepEqual(algorithm(firstArray, secondArray), expectedArray);
  });
});
