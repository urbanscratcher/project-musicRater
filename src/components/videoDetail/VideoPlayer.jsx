import YouTube from 'react-youtube';

function VideoPlayer({ selectedVideoId, height, width }) {
  const option = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="w-full">
      <YouTube
        videoId={selectedVideoId}
        opts={option}
      />
    </div>
  );
}

export default VideoPlayer;
