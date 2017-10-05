import { combineReducers } from 'redux';
import ArtistsReducer from './artists_reducer';

const rootReducer = combineReducers({
  artists: ArtistsReducer,
});

export default rootReducer;