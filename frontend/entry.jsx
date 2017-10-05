import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import {receiveArtist} from './actions/artists_actions';
import {fetchArtist} from './util/artists_api_util';

document.addEventListener("DOMContentLoaded", () => {

  window.receiveArtist = receiveArtist;
  window.fetchArtist = fetchArtist;

	const root = document.getElementById("root");
	ReactDOM.render(<Root/>, root);
});
