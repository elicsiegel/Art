export const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1OWQ1YTkxZmM5ZGMyNDE5MGIwNjkxMzYiLCJleHAiOjE1NzM2NjMxMjAsImlhdCI6MTU3MzA1ODMyMCwiYXVkIjoiNTlkNWE5MWZjOWRjMjQxOTBiMDY5MTM2IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVkYzJmNzEwNmYzYzQyMDAxMmYwM2QyNiJ9.fwQ0NzatrknVT3B3QJz7gR77wAL-1opIY3ynYl0tKe4";
// curl -v -X POST "https://api.artsy.net/api/tokens/xapp_token?client_id=2d13c6496b8d0f11c69d&client_secret=fad661bf31512a3812a24ccb59488f5a"

export const fetchArtist = (slug_name) => {
  return  $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/artists/" + slug_name,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  });
}
