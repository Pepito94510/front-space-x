import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Launches from './pages/launches';
import Home from './pages/home';
import Capsules from './pages/capsules';
import CapsulesDetails from './pages/capsule_details';
import LaunchesDetails from './pages/launches_details';

import './index.css';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/launches/" element={<Launches />}></Route>
        <Route path="/capsules/" element={<Capsules />}></Route>
        <Route path="/capsule/:idcapsule" element={<CapsulesDetails />}></Route>
        <Route path="/launches/:idlaunches" element={<LaunchesDetails />}></Route>
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)