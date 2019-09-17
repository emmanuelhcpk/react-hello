import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Github from './Components/Github';
import Calendar from './Components/Calendar';

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/github" component={Github} />
          <Route path="/calendar" component={Calendar} />

      </div>
    </Router>
  );
}

export default App;
