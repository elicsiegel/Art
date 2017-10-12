import React, { Component } from 'react';

class ArtworkMap extends Component {

  componentDidMount() {
    // debugger
    // if (this.props.artist) {
      this.getCoordinates();
      this.inItMap();
    // }
    // console.log(this.props);
  }

  componentDidUpdate() {
    // if (this.props.artist) {
    //   this.getCoordinates();
    // }
  }

  inItMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: 40.730610, lng: -73.935242},
          mapTypeId: 'terrain'
        });
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
      <div id="map"></div>
    );
  }
}

export default ArtworkMap;