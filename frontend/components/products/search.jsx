import React from 'react';

const Search = () =>{
    return (
        <div className="search-container">
            <input type="text" className="search-input"/>
            <button className="search-btn"><img src={window.searchURL} alt=""/></button>
        </div>
    )
}
export default Search;
