import * as APIUtil from '../util/artists_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

export const receiveArtist = (artist) => {
  return {
    type: RECEIVE_ARTIST,
    artist: { [artist.id]: artist }
  }
};

export const fetchArtist = id => dispatch => {
  // dispatch(requestData());
  return APIUtil.fetchArtist(id).then(artist => dispatch(receiveArtist(artist)))
};