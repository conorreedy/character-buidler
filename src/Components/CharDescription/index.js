import React from 'react';
import './CharDescription.css';
import AppDictionary from '../../Dictionary';

const Skills_Data = AppDictionary.SKILLS;

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
