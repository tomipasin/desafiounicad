import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';
import CriaEntrega from './components/CriaEntrega';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/criaentrega" component={CriaEntrega} />
    </Router>
  );
}