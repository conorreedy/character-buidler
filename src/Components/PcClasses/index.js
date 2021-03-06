import React from "react";
import './PcClasses.scss';

import PcClass from "./PcClass";

class PcClasses extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            pcClasses: this.props.pcClasses,
            activePcClass: null,
        }

        this.setActivePcClass = event => {
            const val = event.target.value;
            const activeClass = this.state.pcClasses.find(x => x.class[0].name === val);
            
            this.setState({
                activePcClass: activeClass ? activeClass.class[0] : null,
            })
        }
    }

    render() {
        
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

                <PcClass 
                    pcClass={this.state.activePcClass} />
            </div>
        )
    }
}


export default PcClasses;

