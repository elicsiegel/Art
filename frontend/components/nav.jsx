import React from 'react';
import SearchContainer from './search/search_container';

const Nav = (props) => {
    return ( 
      <div className="title-div">
        <h1>Art Map</h1>
        <div className="search-outer-div">
          <SearchContainer/>
        </div>
        <div className="author-info">
          <a href="http://www.elicsiegel.com">
            <h4>Eli Siegel</h4> 
          </a>
          <div className="links-div"> 
            <a href="https://www.linkedin.com/in/eli-siegel-a26a3b73/">
              <img src="assets/linkedin.png" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/elicsiegel">
              <img src="assets/github.svg" alt="Github"/>
            </a>
          </div>
        </div>
      </div>
    )
};

export default Nav;