import { useState } from 'react';
import Star from './Star';

function StarRating({ maxRating = 5, primary = true, defaultRating, onSetRating }) {
  const [hoveredRating, setHoveredRating] = useState(-1);
  const [rating, setRating] = useState(defaultRating);
  const colorName = primary ? 'white' : 'red';
  const colorStyle = primary ? 'text-white' : 'text-red';

  function handleClickStar(hoveredRating, onSetRating) {
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
    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, idx) => {
          return (
            <Star
              key={idx}
              color={colorName}
              full={hoveredRating >= 0 ? hoveredRating >= idx + 1 : rating >= idx + 1}
              half={hoveredRating >= 0 ? hoveredRating >= idx + 0.5 : rating >= idx + 0.5}
              onClickStar={e => handleClickStar(hoveredRating, onSetRating)}
              onHoverOut={handleHoverOut}
              onMouseMove={e => handleMouseMove(e, idx)}
            />
          );
        })}
      </div>
      <p className={`${colorStyle}  text-4xl font-semibold`}>{hoveredRating >= 0 ? hoveredRating : rating}</p>
    </div>
  );
}

export default StarRating;
