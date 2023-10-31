import SearchedArtist from './SearchedArtist';
import SearchedTop from './SearchedTop';
import SearchedVideo from './SearchedVideo';

function SearchedList({ musics, onSelectMusic }) {
  const top = musics.length > 0 && musics.filter(item => item.category === 'Top result');

  console.log('top', top);

  const videos = musics.length > 0 && musics.filter(item => item.category === 'Videos');

  const artists = musics.length > 0 && musics.filter(item => item.category === 'Artists');

  return (
    <>
      {top?.length > 0 && <SearchedTop topResult={top[0]} />}

      {videos.length > 0 && (
        <ul>
          {videos?.map(video => (
            <SearchedVideo
              video={video}
              key={video.videoId}
              onSelectMusic={onSelectMusic}
            />
          ))}
        </ul>
      )}

      {artists.length > 0 && (
        <ul>
          {artists?.map((item, idx) => (
            <SearchedArtist
              artist={item}
              key={item.browseId}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchedList;
