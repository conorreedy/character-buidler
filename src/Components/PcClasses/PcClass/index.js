import React from "react";

import { ProfBonusesPerLevel } from "../../../Dictionary";
import Subclass from '../Subclass';

class PcClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pcClass: this.props.pcClass,
        }

        this.buildClassTableGroups = cts => {
            // early exit 
            if (!cts) return "";

            const tableRowChunks = [];

            const maxPlayerLevel = 20;
            const startingLevel = 1;
            let currentLevel = 1;
            let index = 0;

            for (let i = startingLevel; i <= maxPlayerLevel; i++) {
                
                let row = (
                    <div className="table-row">
                        <div className="table-col">{currentLevel}</div>
                        <div className="table-col">+{_getProfBonus(currentLevel)}</div>
                        {
                            cts.map( ct => {
                                return ct.rows[index].map(col => {
                                    return <div className="table-col">{col > 0 ? col : "-"}</div>
                                })
                            })
                        }
                    </div>
                );

                tableRowChunks.push(row);
                currentLevel++;
                index++;
            }

            return (
                <div className="table-outer">
                    <div className="table-inner">
                        <div className="table-header">
                            <div className="table-col">Level</div>
                            <div className="table-col">Proficiency Bonus</div>
                            { 
                                cts.map(ct => {
                                    return ct.colLabels.map(cl => <div className="table-col">{cl}</div>)
                                })
                            }                            
                        </div>
                        {tableRowChunks}
                    </div>
                </div>

            )
        }

        this.buildFeatureEntry = entry => {
            if (!entry.type) {
                return <div>{entry}</div>
            }

            if (entry.type == "list") {
                return entry.items.map(item => <div>{item}</div>)
            }

            const entriesHtmlChunk = [];

            if (entry.type == "entries") {
                return (
                    <div>
                        <div className="embolden-600">{entry.name}</div>
                        { _buildStdFeatureEntries(entry.entries) }
                    </div>
                )
            }

            

            if (entry.type == "inset") {
                return (
                    <div class="inset-block">
                        <div className="inset-header">{entry.name}</div>
                        { _buildInsetEntries(entry.entries) }
                    </div>
                )
            }

            // html and classes look a bit different for the next two.
            // this can def be refactored to pass in classes or something, but 
            // that can be done later. 
            function _buildStdFeatureEntries(entries) {
                for (const x of entries) {
                    if (typeof x == "string") {
                        entriesHtmlChunk.push(<div>{x}</div>);
                    }

                    let chunk;

                    if (x.type == "abilityDc") {
                        chunk = (
                            <div className="text-center">
                                <div><strong>Spell save DC</strong> = 8 + your proficiency bonus + your {x.attributes[0]} modifier</div>
                            </div>
                        )
                    }

                    if (x.type == "abilityAttackMod") {
                        chunk = (
                            <div className="text-center">
                                <div><strong>Spell attack modifier</strong> = 8 + your proficiency bonus + your {x.attributes[0]} modifer</div>
                            </div>
                        )
                    }

                    entriesHtmlChunk.push(chunk);
        
                }

                return <div className="space-sequence-10">{entriesHtmlChunk}</div>;
            }

            function _buildInsetEntries(entries) {
                entries.map(entry => _buildInsetEntriesRecursively(entry));
                return entriesHtmlChunk;
            }

            function _buildInsetEntriesRecursively(entry) {
                if (typeof entry == "string") {
                    entriesHtmlChunk.push(<div>{entry}</div>);
                    return entriesHtmlChunk;
                }
                
                if (entry.name) {
                    entriesHtmlChunk.push(<div className="inset-label">{entry.name}.</div>)
                }
                
                if (entry.entries) {
                    return entry.entries.map(subEntry => _buildInsetEntriesRecursively(subEntry));
                }
                
            }
        }
    }

    render() {

        const x = this.state.pcClass;
            
        return (
            <div className="space-sequence-20">
                <h4>{x.name}</h4>
                <div>{this.buildClassTableGroups(x.classTableGroups)}</div>
                <div>
                    <div><h5>Hit Points:</h5></div>
                    <div><strong>Hit Dice:</strong> {x.hd.number}d{x.hd.faces} per {x.name} level</div>
                    <div><strong>Hit Points at 1st Level:</strong> {x.hd.faces}+ your Constitution modifier</div>
                    <div><strong>Hit Points at Higher Levels:</strong> {x.hd.number}d{x.hd.faces} (or {x.hd.faces/2+1}) + your Constitution modifier per barbarian level after 1st</div>
                </div>
                <div>
                    <div><h5>Proficiencies:</h5></div>
                    <div><strong>Armor:</strong> {x.startingProficiencies.armor ? x.startingProficiencies.armor.join(", ") : "none"}</div>
                    <div><strong>Weapons:</strong> {x.startingProficiencies.weapons ? x.startingProficiencies.weapons.join(", ") : "none"}</div>
                    <div><strong>Tools:</strong> {x.startingProficiencies.tools ? x.startingProficiencies.tools.join(", ") : "none"}</div>
                    <div><strong>Saving Throws:</strong> {x.proficiency.join(", ")}</div>
                    <div><strong>Skills:</strong> {`Choose ${x.startingProficiencies.skills[0].choose.count} from ${x.startingProficiencies.skills[0].choose.from.join(", ")}`}</div>
                </div>
                <div>
                    <div><h5>Equipment:</h5></div>
                    <div>You start with the following equipment, in addition to the equipment granted by your background:</div>
                    <ul>
                        { 
                            x.startingEquipment.default.map(item => {
                                return <li key={item}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                
                <div className="space-sequence-20">
                    <h4>Class Features</h4>
                    {
                        x.classFeatures.map(featureArr => {
                            return featureArr.map(feature => {
                                return (
                                    <div key={feature.name} className="space-sequence-10">
                                        <div className="feature-name-label">{feature.name}</div>
                                        {
                                            feature.entries.map(entry => {
                                                return this.buildFeatureEntry(entry)
                                            })
                                        }   
                                    </div>
                                )
                            })
                        })
                    }
                </div>

                <div className="space-sequence-20">
                    <h4>Subclasses</h4>
                    {
                        x.subclasses.map(sc => <Subclass subclass={sc}></Subclass> )
                    }
                </div>
            </div>
        )
    }

}


export default PcClass;


function _getProfBonus(level) {
    return ProfBonusesPerLevel[level];
}