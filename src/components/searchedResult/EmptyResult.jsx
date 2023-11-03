function EmptyResult() {
  return (
    <div className="flex h-full -translate-y-[100px] flex-col justify-center gap-5">
      <p className="text-4xl">관련 항목을 찾지 못했습니다 :(</p>
      <p className="text-xl text-gray-600">다른 검색어로 시도해주세요</p>
    </div>
  );
}

export default EmptyResult;
