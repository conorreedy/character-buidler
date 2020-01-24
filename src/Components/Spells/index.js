import React from "react";
import AppDictionary from '../../Dictionary';
import './Spells.css';
import Spell from './Spell';

class SpellsSelector extends React.Component {
    
    constructor(props) {
        super(props);

        this.getCurrentFilteredSpells = () => {
            return AppDictionary.SPELLS_FULL;
        }
        
        this.getAllSpells = () => {
            return AppDictionary.SPELLS_FULL;
        }
        this.state = {
            allSpells: this.getAllSpells(), // this probably ought to just be Slugs when actually making calls
            filteredSpells: this.getCurrentFilteredSpells(),
        }
        
    }

    render() {
        return (
            <div>
                { this.state.filteredSpells.map(spell => {
                    return (
                        <div className="content-block" key={spell.slug}>
                            <Spell spell={spell}></Spell>   
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default SpellsSelector;