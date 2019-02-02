export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU0OTc0NTkxMSwiaWF0IjoxNTQ5MTQxMTExLCJhdWQiOiI1OWQ1YTkxZmM5ZGMyNDE5MGIwNjkxMzYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWM1NjA0Nzc3MjdlZDg2MGNiNTQ5NDdmIn0.B9SDSO1jhX2eUlZVOvEiUJcPU4CAHTHt62dGBVfmNtc";
// curl -v -X POST "https://api.artsy.net/api/tokens/xapp_token?client_id=2d13c6496b8d0f11c69d&client_secret=fad661bf31512a3812a24ccb59488f5a"

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
