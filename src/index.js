import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './formulario.js';
import Footer from './footer.js'
import Nav from './nav.js'
import Main from './main.js'
import Selection from './mainSelection'
import Select from './select.js'


ReactDOM.render((
  <BrowserRouter>
    <Nav />
    <Main />
    <Selection />
    <Select />
    <App />
    <Footer />
    </BrowserRouter>
), document.getElementById('root'));
