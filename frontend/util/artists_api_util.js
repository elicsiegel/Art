export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxMzAwNjMwOSwiaWF0IjoxNTEyNDAxNTA5LCJhdWQiOiI1OWU5MDZiY2EwOWE2NzE2NmVlZjgwMjYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWEyNTZhNjViMjAyYTM0Zjg3MmY4OTk4In0.zmZsL2xA7377lSxZkai85ZOMeCLQ9TNixEtzmMvaKDo";

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
