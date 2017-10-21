export default class MarkerManager {
  constructor(map, handleClick, artist_slug_name) {
    this.map = map;
    this.artist_slug_name = artist_slug_name;
    this.markerBounds = new google.maps.LatLngBounds();
    this.markers = {};
    this.handleClick = handleClick;
    this.markers = {};
    this.markersArray = [];
  }

  updateMarkers(museum_coordinates, artworks) {
    Object.keys(this.markers)
      .forEach((museumId) => this.removeMarker(this.markers[museumId]));
    
    museum_coordinates.forEach(newCoord => this.createMarkerFromCoord(newCoord, artworks));

    this.markerCluster = new MarkerClusterer(this.map, this.markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    google.maps.event.trigger(map, 'resize');
  }

  removeMarker(marker) {
    this.markers[marker.museumId].setMap(null);
    delete this.markers[marker.museumId];
  }

  createMarkerFromCoord(newCoord, artworks) {

    let artwork;

    artworks.forEach((artwork1) => {
      if (artwork1.id === Object.keys(newCoord)[0]) {
        artwork = artwork1
      }
    });

    const lat_ling = newCoord[Object.keys(newCoord)[0]]

    const position = new google.maps.LatLng(lat_ling.lat, lat_ling.lng);

    const contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + artwork.collecting_institution + '</h1>'+
            '<div id="bodyContent">'+ artwork.title
            +
            '</div>'+
            '</div>';; 

    const infowindow = new google.maps.InfoWindow({
          content: contentString
        });

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      museumId: Object.keys(newCoord)[0]
    });

    this.markerBounds.extend(position);
    this.map.fitBounds(this.markerBounds);

    marker.addListener('click', function() {
      infowindow.open(this.map, marker);
    });

    // marker.addListener('click', () => this.handleClick(newCoord));
    this.markers[marker.museumId] = marker;
    this.markersArray.push(marker);
  }

}