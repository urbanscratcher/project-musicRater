function SearchedVideo({ video, onSelectMusic, id }) {
  return (
    <li
      key={id}
      onClick={e => {
        e.preventDefault();
        console.log('what', video);
        onSelectMusic(video?.videoId);
      }}>
      <div>category: {video?.category}</div>
      <div>title: {video?.title}</div>
      <div>videoId: {video?.videoId}</div>
      <div>artists: {video?.artists[0]?.name}</div>
      <div>artistsid: {video?.artists[0]?.id}</div>
      <img
        src={video.thumbnails[0]?.url}
        width={video.thumbnails[0].width}
        height={video.thumbnails[0].height}
      />
    </li>
  );
}

export default SearchedVideo;
