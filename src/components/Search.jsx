const Search = ({ onSubmit,searchRef}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        ref={searchRef}
        placeholder="Search for games..."
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search