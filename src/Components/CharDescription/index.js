import React from 'react';
import './CharDescription.css';
import AppDictionary from '../../Dictionary';

const skillsData = AppDictionary.SKILLS;
const languagesData = AppDictionary.LANGUAGES;

class CharDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello from the Description Section</div>
        )
    }
}


export default CharDescription;
