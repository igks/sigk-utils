/**
 * Check if value is null or undefined or empty string
 * @param any-value
 * @returns {boolean}
 */
export function isEmptyOrNull(value) {
  const checkForValue = ["", " ", undefined, null];
  return checkForValue.includes(value);
}

/**
 * Check if array is empty or not
 * @param array
 * @returns {boolean}
 */
export function isEmptyArray(array) {
  return Array.isArray(array) && array.length === 0;
}

/**
 * To call async function with try catch block
 * @param async-function
 * @returns [result, error]
 */
export async function tryTo(action) {
  try {
    const result = await action();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}
