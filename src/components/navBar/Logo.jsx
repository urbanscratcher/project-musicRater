function Logo({ onClickLogo }) {
  return (
    <div
      className="flex cursor-pointer items-center gap-[0.8rem]"
      onClick={onClickLogo}>
      <span
        className="text-5xl"
        role="img">
        🎧
      </span>
      <h1 className="text-4xl font-semibold text-white">MusicRater</h1>
    </div>
  );
}

export default Logo;
