const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Создаёт массив случайно длины (в диапазоне от 10 до 35),
 * заполненный случайными числами в диапазоне от 0 до 100
 * @return {Array.<number>}
 */
module.exports = () => {
  // длина массива. случайная величина. минимум 10, максимум 35.
  const length = getRandomInt(10, 35);
  // максимальное значение в массиве;
  const MAX = 100;
  return [...new Array(length)].map(() => Math.floor(Math.random() * MAX));
};

