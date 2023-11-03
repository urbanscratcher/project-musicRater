import { useState } from 'react';
import VideoStarRating from '../videoDetail/VideoStarRating';
import { useEffect } from 'react';
import DeleteBtn from '../ui/DeleteBtn';
import RatedSummary from './RatedSummary';

function RatedList({ storedRatedList, onSetStoredRatedList, onSetSelectedVideoId }) {
  const [ratedList, setRatedList] = useState([]);

  useEffect(() => {
    setRatedList(storedRatedList);
  }, [storedRatedList]);

  function handleClose(e, videoId) {
    e.stopPropagation();
    const filteredList = ratedList.filter(rated => rated.id !== videoId);
    onSetStoredRatedList(filteredList);
  }

  function handleClickList(e, videoId) {
    onSetSelectedVideoId(videoId);
  }

  return (
    <>
      {ratedList.length > 0 ? (
        <div>
          <RatedSummary ratedList={ratedList} />
          <ul className="mx-3 my-3">
            {ratedList.map((video, idx) => {
              return (
                <li
                  key={video.id}
                  className="flex cursor-pointer flex-col px-8 py-8"
                  onClick={e => handleClickList(e, video.id)}>
                  <img
                    src={video.info.microformat.microformatDataRenderer.thumbnail.thumbnails[0].url}
                    width="180px"
                    alt={video.id}
                  />
                  <div>{video.info.videoDetails.title}</div>
                  <VideoStarRating
                    video={video.info}
                    videoId={video.id}
                    storedRatedList={ratedList}
                    onSetStoredRatedList={onSetStoredRatedList}
                  />
                  <DeleteBtn onClose={e => handleClose(e, video.id)} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
}

export default RatedList;
