import { useState } from 'react';
import StarBtn from './StarBtn';
import { useEffect } from 'react';

function StarRating({ maxRating = 5, primary = true, defaultRating, onSetRating, clickable = true, size = 'md' }) {
  const [hoveredRating, setHoveredRating] = useState(-1);
  const [rating, setRating] = useState(defaultRating);
  const colorName = primary ? 'black' : 'red';
  const colorStyle = primary ? 'text-black' : 'text-red';

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
      <div className="flex px-1">
        {Array.from({ length: maxRating }, (_, idx) => {
          return (
            <StarBtn
              size={size}
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
        <p
          className={`${colorStyle}  ${
            size === 'md' ? 'text-3xl' : size === 'lg' ? 'text-5xl' : size === 'sm' && 'text-xl'
          } translate-y-[0.5px] font-semibold`}>
          {hoveredRating >= 0 ? hoveredRating : rating}
        </p>
      )}
    </div>
  );
}

export default StarRating;
