import "../styles/Search.css";

const Search = ({ inputValue, handleInputValue, onClick }) => {
  return (
    <div className="col-lg-8 mx-auto d-flex justify-content-center mt-5">
      <input
        type="text"
        className="input-search-city form-control p-2"
        style={{ fontSize: "20px" }}
        value={inputValue}
        onChange={handleInputValue}
        placeholder="City"
      />
      <button
        className="btn btn-search btn-primary"
        style={{ fontSize: "24px" }}
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
