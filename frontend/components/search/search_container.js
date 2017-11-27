import { connect } from 'react-redux';
import Search from './search';
import { selectArtistsFromSearchResults } from '../../reducers/selectors';
import { sendSearchQuery, clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    artistResults: selectArtistsFromSearchResults(state.search),
  };
}

const mapDispatchToProps = dispatch => ({
  clearSearchResults: () => dispatch(clearSearchResults()),
  sendSearchQuery: searchQuery => dispatch(sendSearchQuery(searchQuery)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
