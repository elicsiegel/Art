import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SearchContainer from './search/search_container';
import ArtistDetailContainer from './artists/artist_detail_container';
import BackgroundMap from './background_map';
import Nav from './nav';

const App = (props) => {

  return (

      <div>
        <Nav/>
        <div className="artist-wrapper">
          <Switch>
            <Route path="/artists/:artistName" exact component={ArtistDetailContainer} />
            <Route path="/" exact component={BackgroundMap}/>
          </Switch>
        </div>
      </div>

  )
};

export default App;