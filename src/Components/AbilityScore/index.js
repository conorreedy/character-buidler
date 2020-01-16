import React from 'react';
import './AbilityScore.css';

import PointBuy from './PointBuy';
import StandardArray from './StandardArray';
import ManualOption from './Manual';

class AsiGenerator extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            activeMethod: "PointBuy",
            attributes: [
                {
                    id: 1,
                    name: 'Strength',
                    currentAssignedScore: 8,
                    previousAssignedScore: 8,
                },
                {
                    id: 2,
                    name: 'Dexterity',
                    currentAssignedScore: 8,
                    previousAssignedScore: 8,
                },
                {
                    id: 3,
                    name: 'Constitution',
                    currentAssignedScore: 8,
                    previousAssignedScore: 8,
                },
                {
                    id: 4,
                    name: 'Intelligence',
                    currentAssignedScore: 8,
                    previousAssignedScore: 8,
                },
                {
                    id: 5,
                    name: 'Wisdom',
                    currentAssignedScore: 8,
                    previousAssignedScore: 8,
                },
                {
                    id: 6,
                    name: 'Charisma',
                    currentAssignedScore: 8,
                    previousAssignedScore: 8,
                },
            ],
            bonuses: {
                '3': -4,
                '4': -3,
                '5': -3,
                '6': -2,
                '7': -2,
                '8': -1,
                '9': -1,
                '10': 0,
                '11': 0,
                '12': 1,
                '13': 1,
                '14': 2,
                '15': 2,
                '16': 3,
                '17': 3,
                '18': 4,
                '19': 4,
                '20': 5,
                '21': 5,
                '22': 6,
                '23': 6,
                '24': 7,
                '25': 7,
                '26': 8,
                '27': 8,
                '28': 9,
                '29': 9,
                '30': 10,
            }
        }

        this.methods = [
            { id: "PointBuy", name: 'Point Buy'},
            { id: "StandardArray", name: 'Standard Array'},
            { id: "Manual", name: 'Manual'}, 
        ];

        this.getUpdatedAttributes = (updatedAttributes) => {

            this.setState({
                attributes: updatedAttributes,
            });

        }

        this.handleMethodChange = event => {

            this.setState({
                activeMethod: event.target.value,
            })

        }

    }

    render() {

        return (
            <div className="space-sequence-20">
                <div>
                    <div>
                        <select className="form-control" onChange={this.handleMethodChange}>
                            { this.methods.map(method => {
                                return (
                                    <option value={method.id} key={method.id}>{method.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <PointBuy
                    activeMethod={this.state.activeMethod}
                    callbackToGetAttributes={this.getUpdatedAttributes}
                    attributes={this.state.attributes}></PointBuy>


                <StandardArray
                    activeMethod={this.state.activeMethod}
                    callbackToGetAttributes={this.getUpdatedAttributes}
                    attributes={this.state.attributes}></StandardArray>

                <ManualOption
                    activeMethod={this.state.activeMethod}
                    callbackToGetAttributes={this.getUpdatedAttributes}
                    attributes={this.state.attributes}></ManualOption>


                <div className="space-sequence-20">
                    <div>
                        <div className="row">
                            {
                                this.state.attributes.map(attr => {
                                    return (
                                        <div className="col-xs-12 col-md-4 form-group" key={attr.id}>
                                            <div className="attr-block">
                                                <div className="attr-title-bar asi-heading">{attr.name}</div>
                                                <div className="attr-content">
                                                    <div className="attr-row">
                                                        <div className="label-left">Base</div>
                                                        <div className="score">{attr.currentAssignedScore}</div>
                                                    </div>
                                                    <div className="attr-row">
                                                        <div className="label-left">Modifer</div>
                                                        <div className="score">{_getBonusDisplayVal(this.state.bonuses[attr.currentAssignedScore])}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default AsiGenerator;


function _getBonusDisplayVal(val) {
    return Math.sign(val) == 1 ? `+${val}` : val
}