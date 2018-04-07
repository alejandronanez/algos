function arrayFlattener(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  return array.reduce(function r(flattenArray, item) {
    if (Array.isArray(item)) {
      return [...flattenArray, ...arrayFlattener(item)];
    }

    return [...flattenArray, item];
  }, []);
}

module.exports = arrayFlattener;
