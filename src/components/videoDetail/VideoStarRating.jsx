import StarRating from '../ui/StarRating';

function VideoStarRating({ video, videoId, onSetStoredRatedList, storedRatedList, size }) {
  function handleSetRating(video, rating) {
    const ratedVideo = storedRatedList.filter(rated => videoId === rated?.id);
    const isRated = ratedVideo.length > 0;

    let list;
    if (isRated) {
      list = storedRatedList.map(ratedVideo => {
        if (ratedVideo.id === videoId) {
          ratedVideo.rating = rating;
        }
        return ratedVideo;
      });
    } else {
      list = rated => [
        ...rated,
        {
          id: videoId,
          rating: rating,
          info: video,
        },
      ];
    }

    onSetStoredRatedList(list);
  }

  return (
    <StarRating
      size={size}
      defaultRating={
        storedRatedList.some(rated => rated.id === videoId)
          ? storedRatedList.filter(rated => videoId === rated?.id)[0]?.rating
          : 0
      }
      onSetRating={rating => handleSetRating(video, rating)}
    />
  );
}

export default VideoStarRating;
