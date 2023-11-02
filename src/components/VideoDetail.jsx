import useGetVideo from '../hooks/useGetVideo';
import StarRating from './StarRating';
import VideoPlayer from './VideoPlayer';
import ErrorMessage from './basics/ErrorMessage';
import Loader from './basics/Loader';

function VideoDetail({ selectedVideoId, rated, onSetRated }) {
  const ratedVideo = rated.filter(rated => selectedVideoId === rated?.id);
  const isRated = ratedVideo.length > 0;
  const defaultRating = isRated ? ratedVideo[0]?.rating : 0;

  const { video, isLoading, error } = useGetVideo(selectedVideoId);

  return (
    <>
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <div>
          <StarRating
            defaultRating={defaultRating}
            onSetRating={rating => onSetRated(video, rating)}
          />
          <VideoPlayer selectedVideoId={selectedVideoId} />
          <p>title: {video.videoDetails?.title}</p>
          <p>channelId: {video.videoDetails?.channelId}</p>
          <p>viewCount: {video.microformat?.microformatDataRenderer?.viewCount}</p>
          <p>uploadDate: {video.microformat?.microformatDataRenderer?.uploadDate}</p>
          <p>description: {video.microformat?.microformatDataRenderer?.description}</p>
          <p>
            thumbnails: <img src={video.microformat?.microformatDataRenderer?.thumbnail?.thumbnails[0]?.url} />
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
