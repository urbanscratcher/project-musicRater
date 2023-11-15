import { useEffect, useState } from 'react';
import DeleteBtn from '../../ui/DeleteBtn';
import VideoStarRating from '../video-detail/VideoStarRating';

function RatedList({ storedRatedList, onSetStoredRatedList, onSelectMusic }) {
  const [ratedList, setRatedList] = useState([]);

  useEffect(() => {
    setRatedList(storedRatedList);
  }, [storedRatedList]);

  function handleDelete(e, videoId) {
    e.stopPropagation();
    const filteredList = ratedList.filter(rated => rated.id !== videoId);
    onSetStoredRatedList(filteredList);
  }

  function handleClickList(e, videoId) {
    onSelectMusic(videoId);
  }

  return (
    <ul className="mx-3 my-3">
      {ratedList.map((video, idx) => {
        return (
          <li
            key={video.id}
            className="flex cursor-pointer items-center
            gap-3 rounded-xl border
            border-white
            px-6 py-4
            transition-all
            hover:border hover:border-b hover:bg-gray-100"
            onClick={e => handleClickList(e, video.id)}>
            <div className="w-2/12">
              <img
                className="h-20 rounded-lg object-cover"
                src={video.info.microformat.microformatDataRenderer.thumbnail.thumbnails[0].url}
                width="180px"
                alt={video.id}
              />
            </div>
            <p className="w-6/12 text-start">{video.info.videoDetails.title}</p>
            <div className="w-3/12 overflow-hidden">
              <VideoStarRating
                size={'sm'}
                video={video.info}
                videoId={video.id}
                storedRatedList={ratedList}
                onSetStoredRatedList={onSetStoredRatedList}
              />
            </div>
            <div className="w-1/12">
              <DeleteBtn
                color={'#444'}
                onDelete={e => handleDelete(e, video.id)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default RatedList;
