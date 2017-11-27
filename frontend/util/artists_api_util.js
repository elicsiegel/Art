export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxMjQwMjExNiwiaWF0IjoxNTExNzk3MzE2LCJhdWQiOiI1OWRmYWI4M2EwOWE2NzI1NDk0YzNiZjAiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWExYzMyNDQxMzliMjEyNjM2MzljMzM3In0.juhAdLWYHPnLr-jcFka8ENZLfRDoCquvZN08lLMRd3o";

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
