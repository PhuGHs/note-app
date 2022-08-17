import { MdSearch } from 'react-icons/md';
function Search({ handleSearchNote }) {
    return (
        <div className="search-container">
            <MdSearch size="1.5em" className="search-icon" />
            <span className="divider"></span>
            <input
                type="text"
                placeholder="type to search..."
                className="search-input"
                onChange={(e) => handleSearchNote(e.target.value)}
            />
        </div>
    );
}

export default Search;
