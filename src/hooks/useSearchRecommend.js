import { useEffect, useState } from 'react';
import { getBaseUrl } from '../utils/helper';

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

        const res = await fetch(`${getBaseUrl()}/search_recommend?q=${query}`, { signal: controller.signal });

        if (!res.ok) throw new Error('Something went wrong with fetching');

        const data = await res.json();

        setRecommends(data);
        setError('');
      } catch (err) {
        if (err.message === 'The user aborted a request.') {
          return;
        }
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
