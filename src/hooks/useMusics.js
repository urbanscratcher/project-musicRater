import { useEffect, useState } from 'react';

const SEARCH_URL = 'http://localhost:5002/search';

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

        const res = await fetch(`${SEARCH_URL}?q=${query}&f=videos`, { signal: controller.signal });

        if (!res.ok) throw new Error('Something went wrong with fetching');
        data = await res.json();

        if (data.length <= 0) {
          const extendRes = await fetch(`${SEARCH_URL}?q=${query}&f=`, { signal: controller.signal });

          if (!extendRes.ok) throw new Error('Something went wrong with fetching');
          data = await extendRes.json();
          data = data.filter(el => el.category === 'Top result' || el.resultType === 'video');
        }

        // Handle status code error later
        // if (data.Response === 'False') throw new Error('Recommends not found');

        setMusics(data);
        setError('');
      } catch (err) {
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
