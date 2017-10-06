import * as APIUtil from '../util/artists_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

export const receiveArtist = (artist) => {
  return {
    type: RECEIVE_ARTIST,
    artist: { [artist.slug]: artist }
  }
};

export const fetchArtist = slug_name => dispatch => {
  // dispatch(requestData());
  return APIUtil.fetchArtist(slug_name).then(artist => dispatch(receiveArtist(artist)))
};