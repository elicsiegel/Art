import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class ArtistDetail extends Component {

  componentDidMount() {
    // get artist detail info from api based on the name in route
    // get artworks related to that artist from the api
    console.log(this.props.artist_slug_name)
    this.props.fetchArtist(this.props.artist_slug_name)
  }

  render() {
    
    return (
      <div>
        Hey
      </div>
    );
  }
}

export default ArtistDetail;