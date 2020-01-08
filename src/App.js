import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DndClasses from './Components/DndClasses';
import Helmet from 'react-helmet';

import './App.css';
import RaceSelectionForm from './Components/RaceForm';



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
    </div>
  );
}

class Setup extends React.Component {
  
  constructor(props) {

    super(props);

    // this.state = {class: props.class, race: props.race};
    
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
      label={option}
      // isSelected={false}
      // onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => ['hello'].map(this.createCheckbox);

  render() {
    return (
      <div>
        <RaceSelectionForm></RaceSelectionForm>

        {/* <form onSubmit={this.handleSubmit}>
          <DndClasses></DndClasses>
          <label>
            Choose attributes:
            { this.createCheckboxes }
          </label>
          <input type="submit" value="Submit" />
        </form> */}
      </div>
    );
  }
}

const SetupComponent = withTitle({ component: Setup, title: 'Setup' });

function App() {
  return (
    <Router>
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/setup" >
            <div className="container setup">
            <Setup />
            </div>
          </Route>
            
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;