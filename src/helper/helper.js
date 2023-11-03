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

export function maximum(arr) {
  return Math.max(...arr);
}

export function minimum(arr) {
  return Math.min(...arr);
}

export function getBaseUrl() {
  return import.meta.env.VITE_BASE_URL && 'http://localhost:5002';
}
