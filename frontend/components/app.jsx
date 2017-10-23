import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SearchContainer from './search/search_container';
import ArtistDetailContainer from './artists/artist_detail_container';

const App = (props) => (
  <div>
    <div className="title-div">
      <div className="author-info">
        <h4>Eli Siegel</h4> 
        <div className="links-div"> 
          <a href="https://www.linkedin.com/in/eli-siegel-a26a3b73/">
            <img src="assets/linkedin.png" alt="LinkedIn"/>
          </a>
          <a href="https://github.com/elicsiegel">
            <img src="assets/github.svg" alt="Github"/>
          </a>
        </div>
      </div>
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