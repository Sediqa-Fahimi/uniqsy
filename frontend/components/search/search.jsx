import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inquiry: '',
            display: false,

        }
    }
    toggleDisplay(){
        this.setState({display: !this.state.display});
    }
    matches(){
        const matches = [];
        if(this.state.inquiry.length === 0){
            return this.props.titles.slice(6);
        }

        this.props.titles.forEeach(title => {
            
        })
    }

    render(){
        const results = this.matches().map((result,i) =>{
            return (
                <li key={i} onClick={this.handleSelect}>{result}</li>
            )
        })
        return (
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search for anything"
                    onChange={this.handleInput}
                    value={this.state.inquiry}
                    onFocus={this.toggleDisplay}
                    />
                <button className="search-btn" >
                    <center>
                        <img src={window.searchURL} alt="" className="search-icon" />
                    </center>
                </button>

                <ul className={`search-dropdown ${this.state.display ? "" : "hidden"}`}>
                    {results}
                    {/* <ul className={`popular `}>
                        <span className="dropdown-subtitle">Popular</span>
                        <li><a href="#">wall decore</a></li>
                        <li><a href="#">prints</a></li>
                        <li><a href="#">necklace</a></li>
                        <li><a href="#">wreath</a></li>
                    </ul> */}
                    
                    {/* <ul>
                        {searchResults}
                    </ul> */}
                
                </ul>
            </div>
        )
        
    }
}

export default Search;

