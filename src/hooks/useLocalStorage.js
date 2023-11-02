import { useEffect, useState } from 'react';
import { getStoredValue, storeValue } from '../helper/helper';

function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(() => getStoredValue(initialState, key));

  useEffect(() => storeValue(key, value), [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
