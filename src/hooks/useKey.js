import { useEffect } from 'react';

export function useKey(key, action) {
  useEffect(() => {
    function callback(e) {
      if (
        e.code.toLowerCase() === key.toLowerCase() ||
        (e.code === 'Escape' && key === 'Esc') ||
        (e.code === 'ArrowDown' && key === 'Down') ||
        (e.code === 'ArrowUp' && key === 'Up')
      ) {
        console.log('key event', key);
        action();
      }
    }

    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [action, key]);
}
