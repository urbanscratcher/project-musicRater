import EmptyResult from '../ui/EmptyResult';
import SearchedTop from './SearchedTop';
import SearchedVideoItem from './SearchedVideoItem';

function SearchedResults({ musics, onSelectMusic }) {
  const topResult = musics.length > 0 && musics.filter(item => item.category === 'Top result');

  const videos =
    musics.length > 0 &&
    musics.filter(
      item => item.category === 'Videos' || (item.category !== 'Top result' && item.resultType === 'video'),
    );

  return (
    <>
      {topResult?.length > 0 && <SearchedTop topResult={topResult[0]} />}
      {videos.length > 0 ? (
        <>
          <div className="flex flex-col gap-6 py-8">
            <p className="text-start text-2xl">검색 결과 {videos.length}건</p>
            <ul>
              {videos?.map(video => (
                <SearchedVideoItem
                  video={video}
                  key={video.videoId}
                  id={video.videoId}
                  onSelectMusic={onSelectMusic}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <EmptyResult
          errorMessage={'검색 결과가 없습니다 :('}
          actionMessage={'다른 검색어로 시도해보세요'}
        />
      )}
    </>
  );
}

export default SearchedResults;
