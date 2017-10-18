import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(event){
    const searchQuery = event.target.value;
  
    if ( searchQuery.length < 2 ) {
      this.props.clearSearchResults();
      return;
    }

    this.props.sendSearchQuery(searchQuery);
    console.log(this.props.artistResults);
  }

  calculateSlug(href) {
    let slug = href.split('/')
    let length = slug.length

    return slug[length - 1]
  }

  renderArtists() {
    if ( this.props.artistResults.length === 0 ) return;
    // if ( !this.props.searchResultsVisible ) return;
    
    const artistsList = this.props.artistResults.map( artist => { 
      return(
          <li className="search-list-item" key={artist.title}>
            <Link to={`/artists/${ this.calculateSlug(artist._links.permalink.href) }`} className={'story-search-link'} onClick={this.props.clearSearchResults}>
              
                <img className="search-story-img" src={artist._links.thumbnail.href} />
                <span>{ artist.title }</span>
                
            </Link>
          </li>
      );
    });
    return (
      <div className="stories-search-list-container">
        <span>Artists</span>
        <ul className="search-list sub-search-list">
          {artistsList}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="search-bar">
        <input placeholder="Type an artist..." onChange={this.updateResults}/>
        <div className="search-list-container" onBlur={this.props.clearSearchResults}>
          { this.renderArtists() }
        </div>
      </div>
    );
  }

}

export default Search; 