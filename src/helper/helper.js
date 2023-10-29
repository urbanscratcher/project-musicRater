export function getStoredValue(initialState, key) {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : initialState;
}

export function storeValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function average(arr) {
  return arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
}
