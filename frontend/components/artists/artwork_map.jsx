import React, { Component } from 'react';
import MarkerManager from '../../util/marker_manager';
import utf8 from 'utf8';

class ArtworkMap extends Component {

  componentDidMount() {
    this.inItMap();
    this.MarkerManager.updateMarkers(this.props.coordinates, this.props.artworks);
  }

  componentDidUpdate() {
  
    if (this.MarkerManager.artist_slug_name !== this.props.artist_slug_name) {
      this.inItMap();
      this.MarkerManager.updateMarkers(this.props.coordinates, this.props.artworks);
    }
    
  }

  handleClick(museum_coord) {
    console.log(museum_coord);
  }

  inItMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: 'terrain'
    });

    this.MarkerManager = new MarkerManager(this.map, this.handleClick, this.props.artist_slug_name);
  }

  render() {

    return (
      <div id="map-container">
        <h2>Map</h2>
        <div id="map" ref={ map => this.mapNode = map }></div>
      </div>
    );
  }
}

export default ArtworkMap;