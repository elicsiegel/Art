import { xappToken } from './artists_api_util';

var utf8 = require('utf8');

export const fetchArtworks = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artworks?artist_id=" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}

export const fetchArtworkCoordinates = (artwork) => {
  const utf_encoded_museum = utf8.encode(artwork.collecting_institution);
  
  return $.ajax({
      method: "GET",
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + utf_encoded_museum + "&key=AIzaSyARH5K7S8qrtyCRepaXClg3bV56uyyMkqM",
      error: (err) => console.log(err),
  })
}
