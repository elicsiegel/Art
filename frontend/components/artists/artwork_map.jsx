import React, { Component } from 'react';
import MarkerManager from '../../util/marker_manager';

class ArtworkMap extends Component {

  componentDidMount() {
    // debugger
    // if (this.props.artist) {
      this.requestsSent = 0;
      this.getCoordinates();
      this.inItMap();
    // }
    // console.log(this.props);
  }

  componentDidUpdate() {
    if (this.props.coordinates && this.requestsSent === this.props.artworks.length) {
      // console.log(this.props.coordinates);
      this.MarkerManager.updateMarkers(this.props.coordinates, this.props.artworks);
    }
  }

  handleClick(museum_coord) {
    console.log(museum_coord);
  }

  inItMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: 40.730610, lng: -73.935242},
          mapTypeId: 'terrain'
        });

    this.MarkerManager = new MarkerManager(this.map, this.handleClick);

    console.log(this.props.coordinates)
  }

  getCoordinates() {
    for (var i = 0; i < this.props.artworks.length; i++) {
      // fetch artwork coordinates
      this.requestsSent += 1;
      
      if (this.props.artworks[i].collecting_institution !== "") {
        this.props.fetchArtworkLocation(this.props.artworks[i], this.props.artist_slug_name)
      }
    };
  }


  render() {

    return (
      <div id="map" ref={ map => this.mapNode = map }></div>
    );
  }
}

export default ArtworkMap;