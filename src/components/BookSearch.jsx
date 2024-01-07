import { useState } from "react";

const BookSearch = ({ onBookSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    onBookSearch(query);

    setQuery("");
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};
export default BookSearch;
