import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

import {receiveArtist} from './actions/artists_actions';
import {fetchArtist} from './actions/artists_actions';

document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();

  window.receiveArtist = receiveArtist;
  window.fetchArtist = fetchArtist;

  window.store = store; 
  window.dispatch = store.dispatch;
  
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);
});
