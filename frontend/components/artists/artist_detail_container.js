import { connect } from 'react-redux';

import ArtistDetail from './artist_detail';
import { fetchArtist } from '../../actions/artists_actions';
import { fetchArtworks, fetchArtworkLocation } from '../../actions/artworks_actions';
import { getSlugName } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  artist_slug_name: ownProps.match.params.artistName,
  artist: state.artists[ownProps.match.params.artistName],
  artworks: state.artworks[ownProps.match.params.artistName],
  coordinates: state.coordinates[ownProps.match.params.artistName]
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: (slug_name) => dispatch(fetchArtist(slug_name)),
  fetchArtworks: (slug_name) => dispatch(fetchArtworks(slug_name)),
  fetchArtworkLocation: (artwork, artist) => dispatch(fetchArtworkLocation(artwork, artist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistDetail);