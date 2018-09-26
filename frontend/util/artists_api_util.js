export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUzODU3ODY5NSwiaWF0IjoxNTM3OTczODk1LCJhdWQiOiI1OWQ1YTkxZmM5ZGMyNDE5MGIwNjkxMzYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWJhYjllODc0NTU1M2M1ZmE5YmNmMjc4In0.fjrhvfWOUonGNBL9P_mwtbPTdqocYxVJuoTBAkzJMmE";

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
