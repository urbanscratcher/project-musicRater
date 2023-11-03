import { useState } from 'react';
import StarBtn from './StarBtn';
import { useEffect } from 'react';

function StarRating({ maxRating = 5, primary = true, defaultRating, onSetRating, clickable = true }) {
  const [hoveredRating, setHoveredRating] = useState(-1);
  const [rating, setRating] = useState(defaultRating);
  const colorName = primary ? 'white' : 'red';
  const colorStyle = primary ? 'text-white' : 'text-red';

  useEffect(() => {
    setRating(defaultRating);
  }, [defaultRating]);

  function handleClickStar(e, hoveredRating, onSetRating) {
    e.stopPropagation();
    if (!clickable) {
      return;
    }
    setRating(hoveredRating);
    onSetRating && onSetRating(hoveredRating);
  }

  function handleHoverOut() {
    setHoveredRating(-1);
  }

  function handleMouseMove(e, idx) {
    const elementRectArea = e.target.getBoundingClientRect();
    const onLeftBy = divider =>
      e.clientX < elementRectArea.left + (elementRectArea.right - elementRectArea.left) / divider;
    const rating = idx === 0 && onLeftBy(3) ? 0 : onLeftBy(2) ? idx + 0.5 : idx + 1;
    setHoveredRating(rating);
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, idx) => {
          return (
            <StarBtn
              clickable={clickable}
              key={idx}
              color={colorName}
              full={hoveredRating >= 0 ? hoveredRating >= idx + 1 : rating >= idx + 1}
              half={hoveredRating >= 0 ? hoveredRating >= idx + 0.5 : rating >= idx + 0.5}
              onClickStar={e => handleClickStar(e, hoveredRating, onSetRating)}
              onHoverOut={handleHoverOut}
              onMouseMove={e => handleMouseMove(e, idx)}
            />
          );
        })}
      </div>
      {clickable && (
        <p className={`${colorStyle}  text-4xl font-semibold`}>{hoveredRating >= 0 ? hoveredRating : rating}</p>
      )}
    </div>
  );
}

export default StarRating;
