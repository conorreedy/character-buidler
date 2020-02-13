import React from "react";

import { ProfBonusesPerLevel } from "../../../Dictionary";
// TODO : if SUBCLASS COMPONENT turns out to be compatible, then extract it to the parent dir
import Subclass from '../Barbarian/Subclass'; 


class Fighter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
        }

        this.buildClassTableGroups = x => {
            return (
                x.map(ct => {
                    return (
                        <div className="table-outer">
                            <div className="table-inner">
                                <div className="table-header">
                                    <div className="table-col">Level</div>
                                    <div className="table-col">Proficiency Bonus</div>
                                    {
                                        ct.colLabels.map(cl => <div className="table-col">{cl}</div>)
                                    }
                                </div>
                                { 
                                    ct.rows.map( (row, index) => {
                                        return (
                                            <div className="table-row">
                                                <div className="table-col">{index+1}</div>
                                                <div className="table-col">+{_getProfBonus(index)}</div>
                                                <div className="table-col">{row[0]}</div>
                                                <div className="table-col">+{row[1].value}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        const x = this.state.data;
        let barbarianTables = '';
        
        if (x.classTableGroups.length) {
            barbarianTables = this.buildClassTableGroups(x.classTableGroups);
        }
            

        return (
            <div className="space-sequence-20">
                <h4>{x.name}</h4>
                <div>{barbarianTables}</div>
                <div>
                    <div><strong>Hit Points:</strong></div>
                    <div>Hit Dice: {x.hd.number}d{x.hd.faces} per Barbarian level</div>
                    <div>Hit Points at 1st Level: {x.hd.faces}+ your Constitution modifier</div>
                    <div>Hit Points at Higher Levels: {x.hd.number}d{x.hd.faces} (or {x.hd.faces/2+1}) + your Constitution modifier per barbarian level after 1st</div>
                </div>
                <div>
                    <div><strong>Proficiencies:</strong></div>
                    <div>Armor: {x.startingProficiencies.armor.join(", ")}</div>
                    <div>Weapons: {x.startingProficiencies.weapons.join(", ")}</div>
                    <div>Tools: {x.startingProficiencies.tools || "none"}</div>
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


export default Fighter;


function _getProfBonus(index) {
    return ProfBonusesPerLevel[index+1];
}