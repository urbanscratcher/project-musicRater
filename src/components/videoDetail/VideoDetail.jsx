import { useEffect } from 'react';
import useGetVideo from '../../hooks/useGetVideo';
import ErrorMessage from '../basics/ErrorMessage';
import Loader from '../basics/Loader';
import VideoPlayer from './VideoPlayer';
import VideoStarRating from './VideoStarRating';
import { useState } from 'react';

function arrangeVideoDetail(video) {
  return {
    title: video?.videoDetails?.title,
    viewCount: video?.microformat?.microformatDataRenderer?.viewCount,
    uploadAt: video?.microformat?.microformatDataRenderer?.uploadDate,
    description: video?.microformat?.microformatDataRenderer?.description,
    videoId: video?.videoDetails?.videoId,
    durationMin: Math.floor(video?.microformat?.microformatDataRenderer?.videoDetails?.durationSeconds / 60),
    durationSec:
      video?.microformat?.microformatDataRenderer?.videoDetails?.durationSeconds -
      Math.floor(video?.microformat?.microformatDataRenderer?.videoDetails?.durationSeconds / 60) * 60,
    channelName: video?.microformat?.microformatDataRenderer?.pageOwnerDetails?.name,
    channelId: video?.microformat?.microformatDataRenderer?.pageOwnerDetails?.externalChannelId,
    channelUrl: video?.microformat?.microformatDataRenderer?.pageOwnerDetails?.youtubeProfileUrl,
  };
}

function truncateSentence(sentence, length) {
  const arr = sentence.split('');
  if (arr.length > length) {
    return arr.slice(0, length).join('') + '...';
  } else {
    return sentence;
  }
}

function VideoDetail({ selectedVideoId, onSetStoredRatedList, storedRatedList, onSetProgress }) {
  const { video, isLoading, error } = useGetVideo(selectedVideoId);
  const [ratedList, setRatedList] = useState(storedRatedList);

  const data = arrangeVideoDetail(video);

  useEffect(() => {
    setRatedList(storedRatedList);
  }, [storedRatedList]);

  useEffect(() => {
    if (!data?.title) return;
    document.title = `MusicRater | ${data?.title}`;
  }, [data?.title]);

  return (
    <div className="flex flex-col gap-3">
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader onSetProgress={onSetProgress} />}
      {!error && !isLoading && (
        <>
          {data?.title && <p className="px-2 text-start text-2xl">{truncateSentence(data?.title, 55)}</p>}
          <div className="mx-auto overflow-hidden rounded-xl">
            <VideoPlayer
              selectedVideoId={selectedVideoId}
              height="240px"
              width="425px"
            />
          </div>
          <div className="my-6 pl-9">
            <VideoStarRating
              size={'lg'}
              video={video}
              videoId={selectedVideoId}
              storedRatedList={ratedList}
              onSetStoredRatedList={onSetStoredRatedList}
            />
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-gray-100 px-4 py-3 text-start">
            <div className="flex items-end gap-3">
              {data?.channelUrl && data?.channelName && (
                <a
                  className="text-xl hover:underline"
                  href={data.channelUrl}
                  target="_blank"
                  rel="noreferrer">
                  {data.channelName}
                </a>
              )}
              {data?.uploadAt && (
                <p className="text-sm text-gray-600">
                  {new Date(data.uploadAt).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: 'numeric',
                  })}
                </p>
              )}
            </div>
            {data?.description && <p className="text-sm text-gray-600">{data.description}</p>}
            {data?.durationMin && data?.durationSec && (
              <p className="text-right text-sm">
                {data.durationMin} min {data.durationSec} sec
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default VideoDetail;
