import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artists_actions';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState; 
  
  switch(action.type) {
    case RECEIVE_ARTIST:
      nextState = Object.assign( {}, state, action.artist );
      return  nextState; 

    case RECEIVE_ARTISTS:
      return Object.assign( {}, state, action.artists );

    default:
      return state;
  }
};

export default artistsReducer;