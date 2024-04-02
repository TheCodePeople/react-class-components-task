import { Component } from "react";
class BookSearch extends Component{
  constructor(props){
  super(props);
  this.state={
   query: ''    
  };
  
}
handleSubmit = (e) => {
  e.preventDefault();
  const { query } = this.state;
  if (!query.trim()) {
    return;
  }

  const { onBookSearch } = this.props;
  onBookSearch(query);

  this.setState({ query: '' });
};
    handleInputChange = (e) => {
      this.setState({ query: e.target.value });
    };
  
    render() {
      const { query } = this.state;
      return (
        <form className="search-container" onSubmit={this.handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search for books..."
            value={query}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      );
    }
  }
export default BookSearch;
