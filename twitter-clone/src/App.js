import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Profile from './components/pages/Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidebar/>

      <Feed />

      <Router>
        <Switch>
          <Route path='/' exact/>
          <Route path='/profile' component={Profile} />
        </Switch>
    </Router>
    </div>

  );
}

export default App;
