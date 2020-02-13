import React from "react";

import Barbarian from "./Barbarian";

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
                activePcClass: activeClass.class[0].name.toLowerCase()
            })
        }
    }

    render() {
        let activeClass;
        
        //barbarian -> this needs a better solution for matching
        if (this.state.activePcClass == this.state.classIdHash.barbarian) {
            activeClass = <Barbarian data={this.state.pcClasses[0].class[0]} />
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

    let hash = {};
    
    if (!pcClasses) return hash;

    for (let pcClass of pcClasses) {
        let className = pcClass.class[0].name.toLowerCase();
        hash[className] = className;
    }

    return hash;
}