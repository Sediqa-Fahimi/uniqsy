import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.container = React.createRef();
        this.state = {
            inquiry: '',
            display: false,

        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside(e){
        if(this.container.current && !this.container.current.contains(e.target)){
            this.setState({display: false});
        }
    }
    toggleDisplay(){
        if(!this.state.display){
            this.setState({display: !this.state.display});
        }
    }

    handleInput(e){
        this.setState({inquiry: e.currentTarget.value});
    }

    matches(){
        const matches = [];
        const { products } = this.props;
        const { inquiry } = this.state;
        if(inquiry.length === 0){
            return products.slice(0,6);
        }

        products.forEach(product => {
            if(product.title.toLowerCase().includes(inquiry.toLowerCase())){
                matches.push(product);
            }
        });

        if(matches.length === 0){
            matches.push({id: null, title: "No matches found"});
        }

        return matches;
    }

    handleSelect(e){
        const title = e.currentTarget.innerText;
        this.setState({inquiry: title});
    }

    render(){
        const results = this.matches().map((result,i) =>{
            return (
                <li key={i} ><Link 
                                to={`/products/${result.id}`} 
                                onClick={this.handleSelect} 
                                className="search-link"
                                >{result.title}</Link></li>
                
            )
        })
        return (
            <div className="search-container" ref={this.container}>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search for anything"
                    onChange={this.handleInput}
                    value={this.state.inquiry}
                    onFocus={this.toggleDisplay}
                    // onBlur={this.toggleDisplay}
                    />
                <button className="search-btn" >
                    <center>
                        <img src={window.searchURL} alt="" className="search-icon" />
                    </center>
                </button>

                {/* <Dropdown 
                    className={`search-dropdown ${this.state.display ? "" : "hidden"}`}
                    
                    /> */}

                {/* <ul className={`search-dropdown ${this.state.display ? "" : "hidden"}`}>
                    <ul className="results">
                        {results}
                    </ul>
                </ul> */}
                {this.state.display && (
                    <ul className="search-dropdown">
                        <ul className="results">
                            {results}
                        </ul>
                    </ul>
                )}
                
            </div>
        )
        
    }
}

export default withRouter(Search);

