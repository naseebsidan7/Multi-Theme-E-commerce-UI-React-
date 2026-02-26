import { search } from "../../../assets/Ekomart_Assets";

const SearchBar = () => {
  return (
    <>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
        />
         
            <div className="searchButton">
                  <img src={search} className="searchIcon" alt="searchIcon" />
            </div>
        
      </div>
  
    </>
  );
};

export default SearchBar;