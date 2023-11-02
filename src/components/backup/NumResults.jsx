function NumResults({ movies }) {
  return (
    <p className="justify-self-end text-3xl">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NumResults;
