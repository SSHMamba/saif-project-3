const Form = ({submitForm, search, searchQuery}) => {
    return (
    <form onSubmit={submitForm}>
    <i class="fas fa-search"></i>
    <label className="sr-only" htmlFor="searchMovie">Search for a movie</label>
    <input
      className="search"
      type="search"
      placeholder="Search for a movie through the database.."
      value={search}
      onChange={searchQuery}
      />
    </form>
    )
}

export default Form;