import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Import data dictionaries
import Dictionary from './Dictionary';

import PcClasses from './Components/PcClasses';
import RaceSelectionForm from './Components/RaceForm';
import AsiGenerator from './Components/AbilityScore';
import CharDescription from './Components/CharDescription';
import SpellsSelector from './Components/Spells';
import Feats from './Components/Feats';

function NavBar() {
  return (
    <div>
      <div>This is what we have so far:</div>
      <div><a href="/race">Choose a Race</a></div>
      <div><a href="/class">Choose a Class</a></div>
      <div><a href="/asi">Set Ability Scores</a></div>
      <div><a href="/description">Description</a></div>
      <div><a href="/spells">Spells</a></div>
      <div><a href="/feats">Feats</a></div>
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

{/* The `Setup` component is the form and actions for creating the character
  it is responsible for displaying the form as the attributes are being chosen.

  When a form has been submitted in completion we will pass the user data to another 
  component to handle persistence. (TBD datastore)

 */}
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

        <Route path="/race" >
          <div className="container setup">
            <Setup />
          </div>
        </Route>

        <Route path="/class" >
          <div className="container races">
            <PcClasses pcClasses={Dictionary.PC_CLASSES} />
          </div>
        </Route>

        <Route path="/asi" >
          <div className="container asi">
            <AsiGenerator />
          </div>
        </Route>

        <Route path="/description" >
          <div className="container descript">
            <CharDescription />
          </div>
        </Route>

        <Route path="/spells" >
          <div className="container spells">
            <SpellsSelector />
          </div>
        </Route>
        
        <Route path="/feats" >
          <div className="container">
            <Feats feats={Dictionary.FEAT_DATA} />
          </div>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;