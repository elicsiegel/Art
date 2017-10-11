import React, { Component } from 'react';

class ArtworkMap extends Component {

  componentDidMount() {
    this.getCoordinates();
  }

  componentDidUpdate() {
    this.getCoordinates();
  }

  getCoordinates() {
    for (var i = 0; i <= this.props.artworks.length; i++) {
      // fetch artwork coordinates
    };
  }


  render() {
    
    return (
      <div>
        this.props.artworks
      </div>
    );
  }
}

export default ArtworkMap;