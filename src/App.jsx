import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Conference } from './pages/Conference';
import './App.scss';
import {Signin} from "./pages/Signin";
import {Preparation} from "./pages/Preparation";

class App extends Component {
  render() {
    return (
      <Router>
          <img src="/images/backgroud.jpg" alt={"background"} className="bg"/>
        <Routes>
          <Route path="" element={<Signin />} />
          <Route path="/room/:roomId" element={<Conference />} />
          <Route path="/preparation/:roomId" element={<Preparation />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
