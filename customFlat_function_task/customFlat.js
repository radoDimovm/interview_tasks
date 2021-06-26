function customFlat(arr) {
  let flattenArr = [];

  // check if the passed parameter isn't what it should be
  if (typeof arr !== 'object' && !Array.isArray(arr)) {
    return new Error('Wrong parameter');
  }

  if (typeof arr === 'object' && arr !== null) {
    arr = Object.values(arr);
  }

  arr.forEach(element => {
    if (Array.isArray(element) || (typeof element === 'object' && element !== null)) {
      flattenArr = flattenArr.concat(customFlat(element));
    } else {
      flattenArr.push(element);
    }
  });

  return flattenArr;
}