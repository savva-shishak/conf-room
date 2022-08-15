import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Conference } from './pages/Conference';
import './App.scss';

class App extends Component {
  state = {
    openMenu: false,
  };

  render() {
    return (
      <Router>
        <div className="main-layout">
          <div
            style={{ width: this.state.openMenu ? 300 : 30 }}
            className="main-layout__menu"
            onClick={() =>
              this.setState({ openMenu: !this.state.openMenu })
            }
          ></div>
          <div className="main-layout__body">
            <Routes>
              <Route exact path="/" element={<Conference />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
