import { useEffect, useState } from 'react';

const SEARCH_URL = 'http://localhost:5002/search?q=';

function useMusics(query) {
  const [musics, setMusics] = useState([]);
  const [isLoading2, setIsLoading] = useState(false);
  const [error2, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRecommends() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(`${SEARCH_URL}${query}`, { signal: controller.signal });

        if (!res.ok) throw new Error('Something went wrong with fetching');

        const data = await res.json();

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

    fetchRecommends();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { musics, isLoading2, error2 };
}

export default useMusics;
