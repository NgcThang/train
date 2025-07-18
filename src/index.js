import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/main.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once:true });

console.log("loaded index.js");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);