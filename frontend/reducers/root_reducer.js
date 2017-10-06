import { combineReducers } from 'redux';
import ArtistsReducer from './artists_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  artists: ArtistsReducer,
  search: SearchReducer
});

export default rootReducer;