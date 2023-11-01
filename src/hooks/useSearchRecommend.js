import { useEffect, useState } from 'react';

const SEARCH_REC_URL = 'http://localhost:5002/search_recommend?q=';

function useSearchRecommend(query) {
  const [recommends, setRecommends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRecommends() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(`${SEARCH_REC_URL}${query}`, { signal: controller.signal });

        if (!res.ok) throw new Error('Something went wrong with fetching');

        const data = await res.json();

        // Handle status code error later
        // if (data.Response === 'False') throw new Error('Recommends not found');

        setRecommends(data);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length <= 0) {
      setRecommends([]);
      setError('');
      return;
    }

    fetchRecommends();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { recommends, isLoading, error };
}

export default useSearchRecommend;
