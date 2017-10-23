import { xappToken } from './artists_api_util';

export const sendSearchQuery = searchQuery => {
  return $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/search?q=" + searchQuery,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  })
};