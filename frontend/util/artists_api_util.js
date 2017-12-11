export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxMzYyNzMyMCwiaWF0IjoxNTEzMDIyNTIwLCJhdWQiOiI1OWRmYWI4M2EwOWE2NzI1NDk0YzNiZjAiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWEyZWU0Mzg4YjNiODEyZTU4ZTU4MmZlIn0.nOX1bCOSsGBx7ANdGHmBkPfWzZ5kCuBd6US2iYdWqEE";

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
