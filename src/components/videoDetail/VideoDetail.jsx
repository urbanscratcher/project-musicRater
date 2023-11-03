import { useEffect } from 'react';
import useGetVideo from '../../hooks/useGetVideo';
import ErrorMessage from '../basics/ErrorMessage';
import Loader from '../basics/Loader';
import VideoPlayer from './VideoPlayer';
import VideoStarRating from './VideoStarRating';
import { useState } from 'react';
import { useRef } from 'react';

function VideoDetail({ selectedVideoId, onSetStoredRatedList, storedRatedList }) {
  const { video, isLoading, error } = useGetVideo(selectedVideoId);
  const [ratedList, setRatedList] = useState(storedRatedList);
  const imgRef = useRef('');

  useEffect(() => {
    setRatedList(storedRatedList);
  }, [storedRatedList]);

  return (
    <>
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <div>
          <VideoStarRating
            video={video}
            videoId={selectedVideoId}
            storedRatedList={ratedList}
            onSetStoredRatedList={onSetStoredRatedList}
          />
          <VideoPlayer selectedVideoId={selectedVideoId} />
          <p>title: {video.videoDetails?.title}</p>
          <p>channelId: {video.videoDetails?.channelId}</p>
          <p>viewCount: {video.microformat?.microformatDataRenderer?.viewCount}</p>
          <p>uploadDate: {video.microformat?.microformatDataRenderer?.uploadDate}</p>
          <p>description: {video.microformat?.microformatDataRenderer?.description}</p>
          <p>
            thumbnails:
            <img src={video.microformat?.microformatDataRenderer?.thumbnail?.thumbnails[0]?.url} />
          </p>
          <p>
            duration: {Math.floor(video?.microformat?.microformatDataRenderer?.videoDetails.durationSeconds / 60)} min{' '}
            {video?.microformat?.microformatDataRenderer?.videoDetails.durationSeconds -
              Math.floor(video?.microformat?.microformatDataRenderer?.videoDetails.durationSeconds / 60) * 60}{' '}
            sec
          </p>
        </div>
      )}
    </>
  );
}

export default VideoDetail;
