import { useEffect } from 'react';

export function useKey(key, action) {
  useEffect(() => {
    function callback(e) {
      console.log('e.code', e.code);
      console.log('key', key);
      if (e.code.toLowerCase() === key.toLowerCase() || (e.code === 'Escape' && key === 'Esc')) {
        action();
      }
    }

    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [action, key]);
}
