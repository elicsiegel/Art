export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxMDUwOTUxMiwiaWF0IjoxNTA5OTA0NzEyLCJhdWQiOiI1OWU5MDZiY2EwOWE2NzE2NmVlZjgwMjYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNTlmZjUxNDg4YjNiODE3NDRiNjg3NWM1In0.wNayDnjPEtEps-O4mJiqjv7xryXEiWuDYhoqXzpTEwc";

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}

