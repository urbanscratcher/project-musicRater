function arrangeVideo(video) {
  return {
    artistName: video.artists[0]?.name || 'no name',
    artistId: video.artists[0]?.id,
    thumbnail: video.thumbnails[video?.thumbnails?.length - 1]?.url || '',
    videoId: video?.videoId,
    title: video?.title || 'no title',
  };
}

function SearchedVideo({ video, onSelectMusic, id }) {
  const data = arrangeVideo(video);

  return (
    <li
      className="flex cursor-pointer gap-3 rounded-xl border border-white px-6 py-4
      hover:border hover:border-b hover:bg-gray-100"
      key={id}
      onClick={e => {
        e.preventDefault();
        onSelectMusic(data.videoId);
      }}>
      <img
        className="h-40 w-60 rounded-2xl object-cover"
        alt={`thumbnail of ${data.title}`}
        src={data.thumbnail}
      />
      <div className="flex flex-col gap-4 p-2 text-start">
        <p className="text-2xl">{data.title}</p>
        <p className="text-lg text-gray-500">{data.artistName}</p>
      </div>
    </li>
  );
}

export default SearchedVideo;
