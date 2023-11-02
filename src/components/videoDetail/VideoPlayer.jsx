import YouTube from 'react-youtube';

function VideoPlayer({ selectedVideoId }) {
  const option = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={selectedVideoId}
      opts={option}
    />
  );
}

export default VideoPlayer;
