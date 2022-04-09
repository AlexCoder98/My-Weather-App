import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../styles/Search.css";

const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const Search = ({ inputValue, handleInputValue, onClick }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        placeholder="Search city"
      />
      <button onClick={onClick}>Search {searchIcon}</button>
    </div>
  );
};

export default Search;
