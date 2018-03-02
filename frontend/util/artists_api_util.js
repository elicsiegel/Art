export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUyMDYwODU0OSwiaWF0IjoxNTIwMDAzNzQ5LCJhdWQiOiI1OWRmYWI4M2EwOWE2NzI1NDk0YzNiZjAiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWE5OTZhYTVjZDUzMGU1YWIwMjc4MWJhIn0.QYC1F7Kc0D6A-wGxjgoqv2o4fs7uFy4qOI2ufJg1PTc";

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
