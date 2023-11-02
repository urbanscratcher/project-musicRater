import { useEffect, useState } from 'react';

const GET_SONG_URL = 'http://localhost:5002/song/';

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

        const res = await fetch(`${GET_SONG_URL}${videoId}`, { signal: controller.signal });

        if (!res.ok) throw new Error('Something went wrong with fetching');

        const data = await res.json();

        // Handle status code error later
        // if (data.Response === 'False') throw new Error('Recommends not found');

        setVideo(data);
        setError('');
      } catch (err) {
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
