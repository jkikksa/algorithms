module.exports = (array) => {
  const lastIndex = array.length - 1;
  for (let j = 0; j < lastIndex; j++) {
    for (let i = 0; i < lastIndex - j; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
};
