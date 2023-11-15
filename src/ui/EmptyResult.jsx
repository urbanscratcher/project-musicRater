function EmptyResult({ errorMessage, actionMessage }) {
  return (
    <div className="flex h-full -translate-y-[100px] flex-col justify-center gap-4">
      <p className="text-4xl">{errorMessage}</p>
      <p className="text-xl text-gray-600">{actionMessage}</p>
    </div>
  );
}

export default EmptyResult;
