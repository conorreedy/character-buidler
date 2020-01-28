import React from "react";
import AppDictionary from '../../Dictionary';
import './Spells.scss';
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
            <div className="space-sequence-20">
                <div className="filter-block">
                    <div>Filter By Class</div>
                    <div>
                        <div>Filter By Spell Level</div>
                        <div className="spell-level-block">
                            <div className="active"><span>- 0 -</span></div>
                            <div><span>- 1 -</span></div>
                            <div><span>- 2 -</span></div>
                            <div><span>- 4 -</span></div>
                            <div><span>- 5 -</span></div>
                            <div><span>- 6 -</span></div>
                            <div><span>- 7 -</span></div>
                            <div><span>- 8 -</span></div>
                            <div><span>- 9 -</span></div>
                        </div>
                    </div>

                </div>
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