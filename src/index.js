import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';  // ← import thêm
import App from './App';

import './styles/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true });

ReactDOM.render(
  <BrowserRouter>        {/* ← bọc Router ở đây */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



