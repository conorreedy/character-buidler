import React from "react";
import './PointBuy.scss';

import AttributeInputBlock from '../PointBuy/AttributeInput';


class PointBuy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            racialBonus: [],
            rules: {
                maximumBeforeRace: 15,
                minimumBeforeRace: 8,
            },
            pointsUsed: 0,
            pointsRemaining: 27,
            standardPointPool: 27,
            standardPointCost: {
                // 18: 19,
                // 17: 15,
                // 16: 12,
                15: 9,
                14: 7,
                13: 5,
                12: 4,
                11: 3,
                10: 2,
                9: 1,
                8: 0,
                // 7: -1,
                // 6: -2,
                // 5: -4,
                // 4: -6,
                // 3: -9,
            }
        };

        this.doBeforeReturningInChangeHandler = (attr, newAttributeScore) => {
            attr.previousAssignedScore = newAttributeScore;
            this.props.callbackToGetAttributes(this.props.attributes) // callback handler;
        }

        // this.props.attributes = this.props.attributes;

        this.handleChanges = event => {
            //value format is [ASI_SCORE-ATTR_ID]
            //after splitting this var will be ['ASI_SCORE', 'ATTRIBUTE_ID']
            const eventValArr = event.target.value.split('-');

            const attributeId = parseInt(eventValArr[1]);

            for (let attr of this.props.attributes) {
                if (attributeId == attr.id) {
                    const newAttributeScore = parseInt(eventValArr[0]);
                    const prevAttributeScore = parseInt(attr.previousAssignedScore);

                    // if the previous score was 8, then it can be treated as a brand new selection
                    const userMadeBrandNewSelection = prevAttributeScore == 8 ? true : false;
                    // therefore, we assign the new choice as the previousScore for next time 
                    if (userMadeBrandNewSelection) {
                        // and simply decrease the remaining points
                        this.setState({
                            pointsRemaining: this.state.pointsRemaining - this.state.standardPointCost[newAttributeScore],
                        })

                        //update previous with current
                        // attr.previousAssignedScore = newAttributeScore;
                        this.doBeforeReturningInChangeHandler(attr, newAttributeScore);
                        return;
                    }

                    // if there was a previous score, then we need to find out whether they increased or decreased
                    // and then add or subtract the difference 
                    const userIncreasedScore = Math.sign(newAttributeScore - prevAttributeScore) == 1 ? true : false;

                    const pointCost = this.state.standardPointCost

                    if (userIncreasedScore) {
                        // new higher price - the previous lower price = real cost increase
                        const debit = pointCost[newAttributeScore] - pointCost[prevAttributeScore];
                        // subtract the additional cost from the pointsRemaining
                        this.setState({
                            pointsRemaining: this.state.pointsRemaining - debit,

                        })
                        //update previous with current
                        // attr.previousAssignedScore = newAttributeScore;
                        this.doBeforeReturningInChangeHandler(attr, newAttributeScore);
                        return;
                    }

                    // previous higher price - new lower price = real cost decrease
                    const credit = pointCost[prevAttributeScore] - pointCost[newAttributeScore];
                    // add the credit back to pointsRemaining
                    this.setState({
                        pointsRemaining: this.state.pointsRemaining + credit,
                    })
                    //update previous with current
                    // attr.previousAssignedScore = newAttributeScore;
                    this.doBeforeReturningInChangeHandler(attr, newAttributeScore);
                    return;
                }
            }


        }

    }

    render() {
        if (this.props.activeMethod != 'PointBuy') {
            return null;
        }

        return (
            <div className="content-wrap space-sequence-20">
                <div className="text-center">
                    <div className="asi-heading">Points Remaining</div>
                    <div className="asi-points-val-total">{this.state.pointsRemaining} / {this.state.standardPointPool}</div>
                </div>
                <div>
                    <form onChange={this.handleChanges}>
                        <div className="big-ole-table-outer">
                            <div className="tbl-row">
                                {
                                    this.props.attributes.map(attr => {
                                        return (
                                            <div className="tbl-cell" key={attr.id}>
                                                <div className="asi-heading">{attr.name}</div>
                                                <div className="asi-val-select-outer">
                                                    <AttributeInputBlock
                                                        attribute={attr}
                                                        key={attr.id}
                                                        availablePoints={this.state.pointsRemaining}
                                                        pointCosts={this.state.standardPointCost} >
                                                    </AttributeInputBlock>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default PointBuy;