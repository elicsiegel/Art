export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUzNzMxMTU2MiwiaWF0IjoxNTM2NzA2NzYyLCJhdWQiOiI1OWQ1YTkxZmM5ZGMyNDE5MGIwNjkxMzYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWI5ODQ4Y2EzZDNkZDQzNDVlYzJjMmU0In0.aJUjzv82dZDUX-mwmqENyan_TlQ1EpvSlItVipqv1U8";

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
