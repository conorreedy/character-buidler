import React from 'react';
import './Feats.css';

class Feats extends React.Component {
    
    constructor(props) {

        super(props)

        this.feats = props.feats

        this.state = props.feats[0]

        this.handleMethodChange = event => {
            const feat = this.feats.filter(feat => feat.id == event.target.value)
            this.setState(feat[0])
        }
    }

    render() {

        let focusedFeat = this.state

        let prereq

        if (focusedFeat.prereq) {
            prereq = focusedFeat.prereq
        } else {
            prereq = "none"
        }

        return (
            <div className="space-sequence-20">
                <div>
                    <select className="form-control" onChange={this.handleMethodChange}>
                        { this.feats.map(f => {
                            return (
                                <option value={f.id} key={f.id}>{f.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div>
                    {focusedFeat.desc}
                </div>

                <div>
                    Prerequisite: {prereq}
                </div>

                {focusedFeat.points && focusedFeat.points.length > 0 &&
                    <ul className="space-sequence-20">  
                        {focusedFeat.points.map((p, i) => {
                            return(
                                <li key={i}>{p}</li>
                            )
                        })}
                    </ul>
                }
            </div>

        );
    }
}


export default Feats;