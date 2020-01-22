import React from "react";
import './Spell.css';

class Spell extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            detailsActive: false,
        };

        this.toggleDetailDisplayState = () => {
            const currentState = this.state.detailsActive;
            this.setState({ detailsActive: !currentState });
        };

        this.sanitizeString = (str) => {
            if (typeof str == "string") {
                return str;
            }
            return '';
        }
    }

    
    
    render() {
        const spell = this.props.spell;

        const atHigherLevel = () => {

            if (spell.higher_level) {
                const safeString = this.sanitizeString(spell.higher_level);
                
                return (
                    <div className="label-text-pair-outer">
                        <div>At Higher Levels.</div>
                        <div>{safeString}</div>
                    </div>
                )
            }
            return '';
        }

        return (
            <div>
                <div className="spell-preview" onClick={this.toggleDetailDisplayState}>
                    <div className="spell-preview-name">{spell.name}</div> 
                    <div className="spell-preview-subhead">{spell.level} {spell.concentration === true ? " - Concentration" : ""}</div>
                    <span className="expand-spell">
                        { this.state.detailsActive == false ? '+' : '-' }
                    </span>
                </div>
                <div className={this.state.detailsActive ? "spell-detail active" : "spell-detail"}>
                    <div>{spell.level} {spell.school}</div>
                    <div>
                        <div className="label-text-pair-outer">
                            <div>Casting Time</div>
                            <div>{spell.casting_time}</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Range/Area</div>
                            <div>THIS IS GONNA NEED A BIT O PROCESSING</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Components</div>
                            <div>{spell.components} {'('+spell.material+')'}</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Duration</div>
                            <div>{spell.duration}</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Source</div>
                            <div>{spell.page}</div>
                        </div>
                    </div>
                    <div>
                        {/* {
                            spell.desc.map(chunk => {
                                return <div>{chunk}</div>;
                            })
                        } */}
                    </div>
                    { atHigherLevel() }
                </div>
            </div>
        )
    }
}

export default Spell;