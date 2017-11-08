module.exports = (left, right) => {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  if (left.length > 0) {
    result = [...result, ...left];
  }

  if (right.length > 0) {
    result = [...result, ...right];
  }

  return result;
};
