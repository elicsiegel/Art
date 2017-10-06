import { connect } from 'react-redux';

import ArtistIndex from './artist_index';
import { fetchArtist } from '../../actions/artists_actions';
// import { selectArtist } from '../../reducers/selectors';

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: () => dispatch(fetchArtist())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);