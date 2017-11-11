export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxMTAzMTk3NSwiaWF0IjoxNTEwNDI3MTc1LCJhdWQiOiI1OWU5MDZiY2EwOWE2NzE2NmVlZjgwMjYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWEwNzRhMjcyYTg5M2EzOGU3OTIzNmJmIn0.Ugj4X5EtZo-NkIIEGW8f5M4GiyTXm67waDjGo1gvC58";

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
