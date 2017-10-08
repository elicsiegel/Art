import * as APIUtil from '../util/artworks_api_util';

export const RECEIVE_ARTWORKS = 'RECEIVE_ARTWORKS';
export const CLEAR_ARTWORKS = 'CLEAR_ARTWORKS';

export const receiveArtworks = (artworks) => {
  return {
    type: RECEIVE_ARTWORKS,
    artworks: artworks._embedded.artworks
  }
};

export const clearArtworks = (artworks) => {
  return {
    type: CLEAR_ARTWORKS  
  }
};

export const fetchArtworks = slug_name => dispatch => {
  // dispatch(requestData());
  return APIUtil.fetchArtworks(slug_name).then(artworks => dispatch(receiveArtworks(artworks)))
};