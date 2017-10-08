import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';

const defaultState = {};

const SearchesReducer = (state = defaultState, action) => {
  switch(action.type){

    case CLEAR_SEARCH_RESULTS:
      return Object.assign( {}, defaultState );

    case RECEIVE_SEARCH_RESULTS:
      
      const nextState = Object.assign({}, state, action.results);
      
      return Object.assign( {}, nextState);

    default:
      return state;

  }
}

export default SearchesReducer;