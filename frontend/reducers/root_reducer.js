import { combineReducers } from 'redux';
import ArtistsReducer from './artists_reducer';
import SearchReducer from './search_reducer';
import ArtworksReducer from './artworks_reducer';
import CoordinatesReducer from './coordinates_reducer';

const rootReducer = combineReducers({
  artists: ArtistsReducer,
  artworks: ArtworksReducer,
  search: SearchReducer,
  coordinates: CoordinatesReducer,
});

export default rootReducer;