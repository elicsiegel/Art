export default class MarkerManager {
  constructor(map, handleClick, artist_slug_name) {
    this.map = map;
    this.artist_slug_name = artist_slug_name;
    this.markerBounds = new google.maps.LatLngBounds();
    this.markers = {};
    this.handleClick = handleClick;
    this.markers = {};
    this.addListenersForArtworkLis = this.addListenersForArtworkLis.bind(this);
  }

  updateMarkers(museum_coordinates, artworks) {

    Object.keys(this.markers)
      .forEach((latLingId) => this.removeMarker(this.markers[latLingId]));
    
    museum_coordinates.forEach(newCoord => this.createMarkerFromCoord(newCoord, artworks));
    
    Object.keys(this.markers).forEach((latLingId => this.addListenersForArtworkLis(this.markers[latLingId])));

    this.markerCluster = new MarkerClusterer(this.map, this.markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    google.maps.event.trigger(map, 'resize');
  }

  addListenersForArtworkLis(marker) {
    for (var i = 0; i <= marker.artworks.length - 1; i++) {
      const artwork = marker.artworks[i];
      const element = document.getElementById(artwork.slug);
      const map = this.map;
      element.addEventListener('click', function() {
        map.setZoom(17);
        map.panTo(marker.position);
        document.getElementById('map').scrollIntoView();
        marker.infowindow.open(this.map, marker);
      });
    };
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.latLingID];
    marker = null;
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

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      lat: newCoord[Object.keys(newCoord)[0]].lat,
      ling: newCoord[Object.keys(newCoord)[0]].ling,
      museumId: Object.keys(newCoord)[0]
    });

    this.markerBounds.extend(position);
    this.map.fitBounds(this.markerBounds);

    marker.addListener('click', function() {
      this.map.panTo(marker.position);
      this.map.setZoom(17);
      infowindow.open(this.map, marker);
    });

    marker.artworks = [artwork];
    marker.latLingID = marker.position.lat().toString() + marker.position.lng().toString();

    if (this.markers[marker.position.lat().toString() + marker.position.lng().toString()]) {
      //we have a marker at this position
      marker.artworks = marker.artworks.concat(this.markers[marker.position.lat().toString() + marker.position.lng().toString()].artworks)
    }

    let titles = "";
    marker.artworks.forEach((artwork) => {
      titles += "<div class='artwork-info-box'><p>" + artwork.title + "</p>" + '<img src="' + artwork._links.thumbnail.href + '"height="115" max-width="83"></div>'
    });
    

    let numWorks = "";

    if (marker.artworks.length === 1) {
      numWorks = "<h5>1 Artwork</h5>";
    } else {
      numWorks = "<h5>" + marker.artworks.length + " Artworks</h5>";
    }

    const contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + artwork.collecting_institution + '</h1>'+
            '<div id="bodyContent">'+ numWorks + titles
            + 
            '</div>'+
            '</div>';; 

    const infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    marker.infowindow = infowindow;
    // marker.addListener('click', () => this.handleClick(newCoord));
    this.markers[marker.position.lat().toString() + marker.position.lng().toString()] = marker;
    // this.markersArray.push(marker);
  }

}