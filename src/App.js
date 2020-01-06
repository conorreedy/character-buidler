import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Helmet from 'react-helmet';

const TitleComponent = ({ title }) => {
    var defaultTitle = '⚛️ app';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export { TitleComponent };

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export { Checkbox };

const withTitle = ({ component: Component, title }) => {
    return class Title extends Component {
        render() {
            return (
                <React.Fragment>
                    <TitleComponent title={title} />
                    <Component {...this.props} />
                </React.Fragment>
            );
        }
    };
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Upload() {
  return (
    <div>
      <h2>Character Upload</h2>

      This should be a display of the uploaded character data in it's final form.
    </div>
  );
}

{/* The `Setup` component is the form and actions for creating the character
  it is responsible for displaying the form as the attributes are being chosen.

  When a form has been submitted in completion we will pass the user data to another 
  component to handle persistence. (TBD datastore)

 */}
class Setup extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {class: props.class, race: props.race};

    this.classes = [
      'barbarian',
      'bard',
      'cleric',
      'druid',
      'fighter',
      'monk',
      'paladin',
      'ranger',
      'rogue',
      'sorcerer',
      'warlock',
      'wizard',
    ];

    this.races = [
      'aarakocra',
      'asimaar',
      'dragonborn',
      'bugbear',
      'dwarf',
      'elf',
      'feral tiefling',
      'firblog',
      'genasi',
      'goblin',
      'kenku',
      'koblod',
      'lizardfolk',
      'half ORC',
      'gnome',
      'goliath',
      'half-Elf',
      'halfling',
      'hobgoblin',
      'human',
      'oRC',
      'tabaxi',
      'yuan-ti purebloods',
      'triton',
      'warforged',
      'tortle'
    ];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
  }

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  createCheckbox = option => (
    <Checkbox
      label={option.name}
      isSelected={option.active}
      onCheckboxChange={this.handleCheckboxChange}
      key={option.name}
    />
  );

  createCheckboxes = [{name: 'attr-1', active: 1}, {name: 'attr-2', active: 0}].map(this.createCheckbox);

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <label>
          Pick your class: 
          <select value={this.state.class}>
            {this.classes.map(x => <option value={x} key={x}>{x}</option>)}
          </select>
        </label>

        <br />
        
        <label>
          Pick your race: 
          <select value={this.state.race}>
            {this.races.map(x => <option value={x} key={x}>{x}</option>)}
          </select>
        </label>

        <br />

        <label>
          Choose attributes:
          { this.createCheckboxes }
        </label>

        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const SetupComponent = withTitle({ component: Setup, title: 'Setup' });

function App() {
  return (
    <Router>
      <div>
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/setup" component={SetupComponent} />

          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;