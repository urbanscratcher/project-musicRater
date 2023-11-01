import useGetVideo from '../hooks/useGetVideo';
import VideoPlayer from './VideoPlayer';
import ErrorMessage from './basics/ErrorMessage';
import Loader from './basics/Loader';

function VideoDetail({ selectedVideoId }) {
  const { video, isLoading3, error3 } = useGetVideo(selectedVideoId);

  return (
    <>
      {error3 && <ErrorMessage message={error3} />}
      {isLoading3 && <Loader />}
      {!error3 && !isLoading3 && (
        <div>
          <VideoPlayer selectedVideoId={selectedVideoId} />
          <p>title: {video.videoDetails?.title}</p>
          <p>channelId: {video.videoDetails?.channelId}</p>
          <p>viewCount: {video.microformat?.microformatDataRenderer?.viewCount}</p>
          <p>uploadDate: {video.microformat?.microformatDataRenderer?.uploadDate}</p>
          <p>channelId: {video.videoDetails?.channelId}</p>
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
