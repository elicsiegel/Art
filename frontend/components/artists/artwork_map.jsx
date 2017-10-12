import React, { Component } from 'react';

class ArtworkMap extends Component {

  componentDidMount() {
    // debugger
    // if (this.props.artist) {
      this.getCoordinates();
    // }
    // console.log(this.props);
  }

  componentDidUpdate() {
    // if (this.props.artist) {
    //   this.getCoordinates();
    // }
  }

  getCoordinates() {
    for (var i = 0; i < this.props.artworks.length; i++) {
      // fetch artwork coordinates
      this.props.fetchArtworkLocation(this.props.artworks[i], this.props.artist_slug_name)
    };
  }


  render() {
    console.log(this.props.coordinates)
    return (
      <div>
        this.props.artworks
      </div>
    );
  }
}

export default ArtworkMap;