function arrangeTopResult(topResult) {
  let res = {};
  const resultType = topResult?.resultType;

  if (resultType === 'album') {
    res = {
      type: 'album',
      artistName: topResult?.artists[0]?.name,
      artistId: topResult?.artists[0]?.id,
      title: topResult?.title,
      thumbnail: topResult?.thumbnails[topResult?.thumbnails?.length - 1]?.url,
    };
  } else if (resultType === 'artist') {
    res = {
      type: 'artist',
      artistName: topResult?.artists[0]?.name,
      artistId: topResult?.artists[0]?.id,
      subscribers: topResult?.subscribers,
      thumbnail: topResult?.thumbnails[topResult?.thumbnails?.length - 1]?.url,
    };
  } else {
    console.log('CHECK DIFFERENT');
    console.log(topResult);
  }
  return res;
}

function SearchedTop({ topResult }) {
  const data = arrangeTopResult(topResult);

  return (
    data && (
      <div className="flex flex-col gap-8 border-b border-gray-300 py-8 text-xl">
        <p className="text-start text-2xl">가장 유사한 결과</p>
        <div className="flex gap-5">
          <img
            src={data.thumbnail}
            className="h-40 w-40 rounded-full"
            alt={data.artistName}
          />
          <div className="flex flex-col justify-center gap-2 text-start">
            <p className="text-3xl">
              {data.type === 'album' ? data.title : data.type === 'artist' ? data.artistName : ''}
            </p>
            <p className="text-gray-600">
              {data.type === 'album'
                ? data.artistName
                : data.type === 'artist'
                ? data.subscribers + ' subscribers'
                : ''}
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default SearchedTop;
