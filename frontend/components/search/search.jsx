import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);

    }
    render(){

        return (
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for anything"/>
                <button className="search-btn" >
                    <center>
                        <img src={window.searchURL} alt="" className="search-icon" />
                    </center>
                </button>

                <ul className="search-dropdown">
                   
                    <ul className="popular">
                        <span className="dropdown-subtitle">Popular</span>
                        <li><a href="#">wall decore</a></li>
                        <li><a href="#">prints</a></li>
                        <li><a href="#">necklace</a></li>
                        <li><a href="#">wreath</a></li>
                    </ul>
                    
                    {/* <ul>
                        {searchResults}
                    </ul> */}
                
                </ul>
            </div>
        )
        
    }
}

export default Search;

