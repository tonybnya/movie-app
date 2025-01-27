const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="search icon" />

        <input
          type="text"
          placeholder="Search through thousand of movies..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {/* <h1>{searchTerm}</h1> */}
    </div>
  );
};

export default Search;
