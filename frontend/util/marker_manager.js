export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(museum_coordinates) {
    Object.keys(this.markers)
      .forEach((museumId) => this.removeMarker(this.markers[museumId]))

    museum_coordinates.forEach(newCoord => this.createMarkerFromCoord(newCoord))
  }

  removeMarker(marker) {
    this.markers[marker.museumId].setMap(null);
    delete this.markers[marker.museumId];
  }

  createMarkerFromCoord(newCoord) {
    const lat_ling = newCoord[Object.keys(newCoord)[0]]

    const position = new google.maps.LatLng(lat_ling.lat, lat_ling.lng);

    const contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
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

    marker.addListener('click', function() {
      infowindow.open(this.map, marker);
    });

    // marker.addListener('click', () => this.handleClick(newCoord));
    this.markers[marker.museumId] = marker;
  }

}