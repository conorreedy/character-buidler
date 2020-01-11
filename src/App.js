import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Helmet from 'react-helmet';

// import DndClasses from './Components/DndClasses';
import RaceSelectionForm from './Components/RaceForm';
import AsiGenerator from './Components/AbilityScore';

function NavBar() {
  return (
    <div>
      <div>This is what we have so far:</div>
      <div><a href="/setup">Choose a Race</a></div>
      <div><a href="/asi">Set Ability Scores</a></div>
      <div><a href="">Choose a Class</a></div>
    </div>
  );
}

function Home() {
  return(
    <div>
      Home.
    </div>
  )
}

class Setup extends React.Component {

  constructor(props) {

    super(props);
  }

  render() {
    return (
      <div id="race`form">
        <RaceSelectionForm />
      </div>
    );
  }
}

function App() {
  return (

    <Router>
      <div className="navbar">
        <NavBar />
      </div>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/setup" >
          <div className="container setup">
            <Setup />
          </div>
        </Route>

        <Route path="/asi" >
          <div className="container asi">
            <AsiGenerator />
          </div>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;