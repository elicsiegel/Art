import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SearchContainer from './search/search_container';
import ArtistDetailContainer from './artists/artist_detail_container';
import Nav from './nav';

const App = (props) => (
  <div>
    <Nav/>
    <div>
      <Route path="/artists/:artistName" exact component={ArtistDetailContainer} />
    </div>
  </div>
);

export default App;