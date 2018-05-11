export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUyNjY1MTMwOCwiaWF0IjoxNTI2MDQ2NTA4LCJhdWQiOiI1OWQ1YTkxZmM5ZGMyNDE5MGIwNjkxMzYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWFmNTlmMmNjOWRjMjQwMzhhNWM1MjA2In0.zT9iBJh24IoDP_busZUUZ7zU1zuzDCWx0ijZVdrwuso";

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
