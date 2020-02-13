import React from "react";

import Barbarian from "./Barbarian";
import Fighter from "./Fighter";
import Wizard from "./Wizard";

class PcClasses extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            pcClasses: this.props.pcClasses,
            activePcClass: null,
            classIdHash: _buildClassIdHash(this.props.pcClasses)
        }

        this.setActivePcClass = event => {
            const val = event.target.value;
            const activeClass = this.state.pcClasses.find(x => x.class[0].name === val);

            this.setState({
                activePcClass: activeClass.class[0].name.toLowerCase().trim()
            })
        }
    }

    render() {
        let activeClass;
        

        //TODO: 
        //  1. integrate more reliable method of matching these 
        //  2. refactor this nightmare
        
        //barbarian 
        if (this.state.activePcClass == this.state.classIdHash.barbarian.name) {
            const index = this.state.classIdHash.barbarian.indexReference;
            activeClass = <Barbarian data={this.state.pcClasses[index].class[0]} />
        }

        //fighter
        if (this.state.activePcClass == this.state.classIdHash.fighter.name) {
            const index = this.state.classIdHash.fighter.indexReference;
            activeClass = <Fighter data={this.state.pcClasses[index].class[0]} />
        }

        //wizard
        if (this.state.activePcClass == this.state.classIdHash.wizard.name) {
            const index = this.state.classIdHash.wizard.indexReference;
            activeClass = <Wizard data={this.state.pcClasses[index].class[0]} />
        }

        return (
            <div className="space-sequence-20">
                <div>
                    <select className="form-control" onChange={this.setActivePcClass}>
                        <option value="">Select a Class</option>
                        {
                            this.state.pcClasses.map(pc => {
                                return <option key={pc.class[0].name} value={pc.class[0].name}>{pc.class[0].name}</option>
                            })
                        }
                    </select>
                </div>

                <div>{activeClass}</div>
            </div>
        )
    }
}


export default PcClasses;


function _buildClassIdHash(pcClasses) {
    if (!pcClasses) return {};

    let hash = {};
    
    for (let i=0; i < pcClasses.length; i++) {
        let className = pcClasses[i].class[0].name.toLowerCase().trim();

        hash[className] = {
            name: className,
            indexReference: i,
        }
    }

    return hash;
}