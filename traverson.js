var traverson = require('traverson'),
    JsonHalAdapter = require('traverson-hal'),
    xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUwNzc3OTQ4NywiaWF0IjoxNTA3MTc0Njg3LCJhdWQiOiI1OWQ1YTkxZmM5ZGMyNDE5MGIwNjkxMzYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNTlkNWE5MWYyYTg5M2E2ZGZlZmRjN2U1In0.c9NMrQVnSXFS5HiPse76-sWfHaEePM1svI7QZ2b4ioc';

traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
api = traverson.from('https://api.artsy.net/api').jsonHal();

api.newRequest()
  .follow('artworks')
  .withRequestOptions({
    headers: {
      'X-Xapp-Token': xappToken,
      'Accept': 'application/vnd.artsy-v2+json'
    }
  })
  .withTemplateParameters({ artist_id: 'leonardo-da-vinci' })
  .getResource(function(error, andyWarhol) {
    // console.log(andyWarhol._embedded.artworks);
    return andyWarhol
    // console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
  });

  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/andy-warhol",
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  }).then(res => console.log(res))