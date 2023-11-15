function SearchedArtist({ artist, key }) {
  const thumbnailIdx = artist?.thumbnails.length >= 2 ? 1 : artist?.thumbnails.length >= 1 ? 0 : undefined;

  return (
    <li key={key}>
      <div>category: {artist.category}</div>
      <div>artist: {artist.artist}</div>
      <div>browseId: {artist.browseId}</div>
      <div>radioId: {artist.radioId}</div>
      <img
        src={artist.thumbnails[thumbnailIdx]?.url}
        width={artist.thumbnails[thumbnailIdx]?.width}
        height={artist.thumbnails[thumbnailIdx]?.height}
      />
    </li>
  );
}

export default SearchedArtist;
