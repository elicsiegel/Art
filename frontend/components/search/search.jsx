import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(event){
    const searchQuery = event.target.value;
  
    if ( searchQuery.length < 2 ) {
      // this.props.clearSearchResults();
      return;
    }

    this.props.sendSearchQuery(searchQuery)
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={this.updateResults}/>
      </div>
    );
  }

}

export default Search; 