import React from 'react';

const Search = () =>{
    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search for anything"/>
            <button className="search-btn" >
                <center>
                    <img src={window.searchURL} alt="" className="search-icon" />
                </center>
            </button>
        </div>
    )
}
export default Search;

