import { Component } from "react";

export default class BookSearch extends Component {
  state={
    query:""
  }


   handleSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.query.trim()) {
          return;
        }
    
        this.props.onBookSearch(this.state.query);
    
        this.setState({query:""});
      };
    
       handleInputChange = (e) => {
        this.setState({query: e.target.value});
      };

  render(){
    return (
          <form className="search-container" onSubmit={this.handleSubmit}>
            <input
              className="search-input"
              type="text"
              placeholder="Search for books..."
              value={this.state.query}
              onChange={this.handleInputChange}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        );
  }
}
