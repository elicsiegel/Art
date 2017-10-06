import { connect } from 'react-redux';

import ArtistDetail from './artist_detail';
import { fetchArtist } from '../../actions/artists_actions';
import { getSlugName } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  artist_slug_name: ownProps.match.params.artistName,
  artist: state.artists[ownProps.match.params.artistName]
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: (slug_name) => dispatch(fetchArtist(slug_name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistDetail);