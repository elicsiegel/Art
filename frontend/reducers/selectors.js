const convertToArray = (results) => Object.keys(results).map(id => results[id]);

export const selectArtistsFromSearchResults = (results) => {
  var arrayResults = convertToArray(results)
  return arrayResults.filter((item) => item.type === "artist");
}