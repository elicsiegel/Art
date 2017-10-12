import { RECEIVE_COORDINATES } from '../actions/artworks_actions';

const defaultState = {};

const coordinatesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState; 
  
  switch(action.type) {

    case RECEIVE_COORDINATES:
      const updatedCoords = Object.assign({}, state[action.artist], action.artwork); 
      nextState = Object.assign({}, state)
      nextState[action.artist] = updatedCoords
      debugger
      return Object.assign({}, state, nextState)
    default:
      return state;
  }
};

export default coordinatesReducer;