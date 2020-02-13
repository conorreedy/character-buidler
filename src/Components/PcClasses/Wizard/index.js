import React from "react";

import { ProfBonusesPerLevel } from "../../../Dictionary";
import Subclass from '../Barbarian/Subclass';



class Wizard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
        }

        this.buildClassTableGroups = cts => {
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
    }

    render() {
        const x = this.state.data;
        let pcClassTables = '';
        
        if (x.classTableGroups.length) {
            pcClassTables = this.buildClassTableGroups(x.classTableGroups);
        }
            

        return (
            <div className="space-sequence-20">
                <h4>{x.name}</h4>
                <div>{pcClassTables}</div>
                <div>
                    <div><strong>Hit Points:</strong></div>
                    <div>Hit Dice: {x.hd.number}d{x.hd.faces} per {x.name} level</div>
                    <div>Hit Points at 1st Level: {x.hd.faces}+ your Constitution modifier</div>
                    <div>Hit Points at Higher Levels: {x.hd.number}d{x.hd.faces} (or {x.hd.faces/2+1}) + your Constitution modifier per barbarian level after 1st</div>
                </div>
                <div>
                    <div><strong>Proficiencies:</strong></div>
                    <div>Armor: {x.startingProficiencies.armor ? x.startingProficiencies.armor.join(", ") : "none"}</div>
                    <div>Weapons: {x.startingProficiencies.weapons ? x.startingProficiencies.weapons.join(", ") : "none"}</div>
                    <div>Tools: {x.startingProficiencies.tools ? x.startingProficiencies.tools.join(", ") : "none"}</div>
                    <div>Saving Throws: {x.proficiency.join(", ")}</div>
                    <div>Skills: {`Choose ${x.startingProficiencies.skills[0].choose.count} from ${x.startingProficiencies.skills[0].choose.from.join(", ")}`}</div>
                </div>
                <div>
                    <div><strong>Equipment:</strong></div>
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
                                    <div key={feature.name}>
                                        <div><strong>{feature.name}</strong></div>
                                        {
                                            feature.entries.map(entry => {
                                                if (!entry.type) {
                                                    return <div>{entry}</div>
                                                }
                                                if (entry.type == "list") {
                                                    return entry.items.map(item => <div>{item}</div>)
                                                }

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


export default Wizard;


function _getProfBonus(level) {
    return ProfBonusesPerLevel[level];
}