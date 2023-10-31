function SearchedTop({ topResult }) {
  const thumbnailIdx = topResult?.thumbnails.length >= 2 ? 1 : topResult?.thumbnails.length >= 1 ? 0 : undefined;

  return (
    <div>
      <div>Top Result: {topResult.resultType}</div>
      <div>subscribers: {topResult.subscribers}</div>
      <div>artist: {topResult.artists[0].name}</div>
      <div>id: {topResult.artists[0].id}</div>
      <img
        src={topResult?.thumbnails[thumbnailIdx]?.url}
        width={topResult?.thumbnails[thumbnailIdx]?.width}
        height={topResult?.thumbnails[thumbnailIdx]?.height}
        alt={topResult.artists[0].name}
      />
    </div>
  );
}

export default SearchedTop;
