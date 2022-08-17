import Search from './Search';
function Header({ handleSearchNote, handleToggleDarkMode }) {
    return (
        <div className="header">
            <div className="upper-header">
                <h1>Notes</h1>
                <button className="toggle-button" onClick={() => handleToggleDarkMode((prev) => !prev)}>
                    Toggle Mode
                </button>
            </div>
            <Search handleSearchNote={handleSearchNote} />
        </div>
    );
}

export default Header;
