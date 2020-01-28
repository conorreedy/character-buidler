import React from "react";

class Barbarian extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
        }

    }

    // TODO: extract the consistent stuff to smaller components 

    render() {
        const x = this.state.data;

        return (
            <div className="space-sequence-20">
                <h4>{x.name}</h4>
                <div><h4>ADD Barbarian Table</h4></div>
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

                
                <h4>Subclasses</h4>
                {
                    x.subclasses.map(sc => {
                        return (
                            <div><strong>{sc.name}</strong></div>
                        )
                    })
                }
            </div>
        )
    }

}


export default Barbarian;