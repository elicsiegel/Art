import { connect } from 'react-redux';
import Search from './search';
import { selectArtistsFromSearchResults } from '../../reducers/selectors';
// import { activateDropdown, deactivateDropdown } from '../../actions/dropdown_actions';
import { sendSearchQuery, clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    artistResults: selectArtistsFromSearchResults(state.search),
    // userResults: relevantUserSearchResults(state),
    // searchBarVisible: state.dropdowns["searchBar"],
    // searchResultsVisible: state.dropdowns["searchResults"],
  };
}

const mapDispatchToProps = dispatch => ({
  clearSearchResults: () => dispatch(clearSearchResults()),
  sendSearchQuery: searchQuery => dispatch(sendSearchQuery(searchQuery)),
  // showSearchResults: () => dispatch(activateDropdown('searchResults')),
  // showSearchBar: () => dispatch(activateDropdown('searchBar')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);