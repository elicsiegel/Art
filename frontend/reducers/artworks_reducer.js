import { RECEIVE_ARTWORKS, CLEAR_ARTWORKS, RECEIVE_COORDINATES } from '../actions/artworks_actions';

const defaultState = {};

const artworksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState; 
  
  switch(action.type) {
    case RECEIVE_ARTWORKS:
      nextState = Object.assign( {}, state, action.artworks );
      return  nextState; 

    case CLEAR_ARTWORKS:
      return Object.assign( {}, defaultState );

    // case RECEIVE_COORDINATES:
    //   const updatedArtwork = { [action.artist.slug]: Object.assign({}, action.artwork, action.coordinates.results[0].geometry.location) }

    //   nextState = Object.assign({}, state, updatedArtwork)
      
    //   return Object.assign({}, state, nextState)

    default:
      return state;
  }
};

export default artworksReducer;