export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU1NjQ5ODE2MSwiaWF0IjoxNTU1ODkzMzYxLCJhdWQiOiI1OWQ1YTkxZmM5ZGMyNDE5MGIwNjkxMzYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWNiZDBjNzEzMWRlYzczMDY0N2JkMjUzIn0.AMtelBqLpX44XEDPXIOsxkaXGLtIdapSLsDqGoyxO_Y";
// curl -v -X POST "https://api.artsy.net/api/tokens/xapp_token?client_id=2d13c6496b8d0f11c69d&client_secret=fad661bf31512a3812a24ccb59488f5a"

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
