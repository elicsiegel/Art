export const convertToArray = (results) => {
  if (results) {
    return Object.keys(results).map(id => {
      return {[id]: results[id]}
    });
  }
};

const makeSearchResultsArray = (results) => Object.keys(results).map(id => results[id]);

export const selectArtistsFromSearchResults = (results) => {
  var arrayResults = makeSearchResultsArray(results)
  return arrayResults.filter((item) => item.type === "artist");
}

export const getSlugName = (name) => {
  let slugName = name.split(' ');

  for (let i = 0; i < slugName.length; i++) {
    slugName[i] = slugName[i].toLowerCase();
  };
  return slugName.join('-');
}