import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getSlugName } from '../../reducers/selectors';

class ArtistDetail extends Component {

  componentDidMount() {
    // get artist detail info from api based on the name in route
    // get artworks related to that artist from the api

    this.props.fetchArtist(this.props.artist_slug_name)
  }

  componentDidUpdate() {
    console.log(this.props.match.params.artistName)
    // debugger
    // this.props.fetchArtist(this.props.artist_slug_name)
    if (this.props.artist === undefined) {
      this.props.fetchArtist(getSlugName(this.props.match.params.artistName));
    }
  }

  renderArtistInfo() {
    if (!this.props.artist) return; 
    console.log(this.props.artist)
    return (
      this.props.artist.name 
    );
  }

  render() {
    
    return (
      <div>
        Artist Bio:
        
        { this.renderArtistInfo() }

      </div>
    );
  }
}

export default ArtistDetail;