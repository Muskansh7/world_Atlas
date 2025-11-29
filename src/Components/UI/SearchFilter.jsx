export const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        value={search}
         onChange={handleInputChange}
      />
    </section>
  );
};