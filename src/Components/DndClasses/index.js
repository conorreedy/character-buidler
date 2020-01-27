import React from "react";
import "./DndClasses.scss";

class DndClasses extends React.Component {
    
    render() {
        const races = CLASS_DATA;

        return (
            <div>
                <label>Choose a Class</label>
                <select className="form-control">
                    <option value="" key="" selected disabled>Make a selection</option>
                    {races.map(x => <option value={x.id} key={x.id}>{x.name}</option>)}
                </select>
            </div>
        );
    }

}

const CLASS_DATA = [
    {
        id: 1,
        name: 'Barbarian'
    },
    {
        id: 2,
        name: 'Bard'
    },
    {
        id: 3,
        name: 'Cleric'
    },
    {
        id: 4,
        name: 'Druid'
    },
    {
        id: 5,
        name: 'Fighter'
    },
    {
        id: 6,
        name: 'Monk'
    },
    {
        id: 7,
        name: 'Paladin'
    },
    {
        id: 8,
        name: 'Ranger'
    },
    {
        id: 9,
        name: 'Rogue'
    },
    {
        id: 10,
        name: 'Sorcerer'
    },
    {
        id: 11,
        name: 'Warlock'
    },
    {
        id: 12,
        name: 'Wizard'
    },
];

export default DndClasses;