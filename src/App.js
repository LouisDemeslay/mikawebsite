import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Layout/>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
