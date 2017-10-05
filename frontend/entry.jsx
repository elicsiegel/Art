import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './components/congrats';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Congrats/>, root);
});
