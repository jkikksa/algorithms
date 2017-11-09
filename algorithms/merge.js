module.exports = (left, right) => {
  const leftLength = left.length;
  const rightLength = right.length;
  let result = [];
  let i = 0;
  let j = 0;

  while (i < leftLength && j < rightLength) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < leftLength) {
    result.push(left[i++]);
  }

  while (j < rightLength) {
    result.push(right[j++]);
  }

  return result;
};
