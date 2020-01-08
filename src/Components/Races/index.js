import React from "react";
import "./Races.css";
import AppDictionary from '../../Dictionary';

class Races extends React.Component {
    
    render() {
        const races = AppDictionary.RACE_DATA;

        return (
            <div>
                <label>Choose a Race</label>
                <select className="form-control">
                    <option value="" key="0" selected disabled>Make a selection</option>
                    {races.map(x => <option value={x.id} key={+x.id}>{x.name}</option>)}
                </select>
            </div>
        );
    }

}

export default Races;