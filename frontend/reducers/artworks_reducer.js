import { RECEIVE_ARTWORKS, CLEAR_ARTWORKS } from '../actions/artworks_actions';

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

    default:
      return state;
  }
};

export default artworksReducer;