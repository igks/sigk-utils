export function isEmptyOrNull(value) {
  const checkForValue = ["", " ", undefined, null];
  return checkForValue.includes(value);
}

export function isEmptyArray(array = []) {
  return array.length === 0;
}
