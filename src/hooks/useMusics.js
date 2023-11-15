import { useEffect, useState } from 'react';
import { getBaseUrl } from '../utils/helper';

function useMusics(query) {
  const [musics, setMusics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMusics() {
      let data;

      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(`${getBaseUrl()}/search?q=${query}&f=videos`, { signal: controller.signal });

        if (!res.ok) throw new Error('Something went wrong with fetching');
        data = await res.json();

        if (data.length <= 0) {
          const extendRes = await fetch(`${getBaseUrl()}/search?q=${query}&f=`, { signal: controller.signal });

          if (!extendRes.ok) throw new Error('Something went wrong with fetching');
          data = await extendRes.json();
          data = data.filter(el => el.category === 'Top result' || el.resultType === 'video');
        }

        setMusics(data);
        setError('');
      } catch (err) {
        if (err.message === 'The user aborted a request.') {
          return;
        }
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length <= 0) {
      setMusics([]);
      setError('');
      return;
    }

    fetchMusics();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { musics, isLoading, error };
}

export default useMusics;
