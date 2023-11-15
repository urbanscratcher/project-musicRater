import { useEffect, useState } from 'react';
import { getBaseUrl } from '../utils/helper';

function useGetVideo(videoId) {
  const [video, setVideo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!videoId) {
      setVideo({});
      setError('');
      return;
    }

    const controller = new AbortController();

    async function fetchVideo() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(`${getBaseUrl()}/song/${videoId}`, { signal: controller.signal });

        if (!res.ok) throw new Error('Something went wrong with fetching');

        const data = await res.json();

        setVideo(data);
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

    fetchVideo();

    return () => {
      controller.abort();
    };
  }, [videoId]);

  return { video, isLoading, error };
}

export default useGetVideo;
