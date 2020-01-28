import React from "react";
import "./PcClasses.scss";

import Barbarian from "./Barbarian";

class PcClasses extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            pcClasses: this.props.pcClasses,
        }
    }

    render() {
        return (
            <div className="space-sequence-20">
                <div>
                    <select className="form-control">
                        <option value="">Select a Class</option>
                        {
                            this.state.pcClasses.map(pc => {
                                return <option key={pc.class[0].name} value={pc.class[0].name}>{pc.class[0].name}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <Barbarian data={this.state.pcClasses[0].class[0]} />
                </div>
            </div>
        )
    }
}


export default PcClasses;