import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SearchContainer from './search/search_container';
import ArtistDetailContainer from './artists/artist_detail_container';

const App = (props) => (
  <div>
    <div className="title-div">
      <h1>Art Map</h1>
    </div>
    <div>
      <SearchContainer/>
    </div>
    <div>
      <Route path="/artists/:artistName" exact component={ArtistDetailContainer} />
    </div>
  </div>
);

export default App;