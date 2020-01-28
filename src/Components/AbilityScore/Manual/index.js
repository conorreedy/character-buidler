import React from 'react';
import './Manual.scss';


class ManualOption extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lastAttributeUpdated: null,
        }

        this.handleChange = event => {
            const updatedAttr = this.state.lastAttributeUpdated;
            
            const newAttributeScore = _getValidScore(event.target.value);
            
            if (!newAttributeScore) {
                event.target.value = '';
                console.error('Not a valid input');
                return;
            }

            for (const attr of this.props.attributes) {
                if (attr.id == updatedAttr.id) {
                    attr.previousAssignedScore = attr.currentAssignedScore || newAttributeScore;
                    attr.currentAssignedScore = newAttributeScore;
                    this.props.callbackToGetAttributes(this.props.attributes); // callback handler
                    // in case the value was out of bounds, put back in
                    event.target.value = newAttributeScore ? newAttributeScore : event.target.value;
                }
            }
            
            this.state.lastAttributeUpdated = null;
        }

    }
   
    render() {

        if (this.props.activeMethod != 'Manual') {
            return null;
        }

        return (
            <div className="content-wrap">
                <form>
                    <div className="big-ole-table-outer">
                        <div className="tbl-row">
                            {this.props.attributes.map(attr => {
                                return (
                                    <div key={attr.id} className="tbl-cell">
                                        <div className="asi-heading">{attr.name}</div>
                                        <div className="asi-val-select-outer">
                                            <input 
                                                className="form-control"
                                                onBlur={event => {
                                                    this.state.lastAttributeUpdated=attr;
                                                    this.handleChange(event);
                                                }}/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default ManualOption;




function _getValidScore(value) {
    // rules: 
        // 2 & 31 are out of bounds
        // must be int

    if ( TryParseInt(value, false) == false ) {
        return false;
    }

    const intVal = parseInt(value);

    // greater than 30 -> return 30
    if (intVal > 30) return 30;
    // less than 3 -> return 3
    if (intVal < 3) return 3;
    // return value
    return intVal;

}




function TryParseInt(str,defaultValue) {
    var retValue = defaultValue;
    if(str !== null) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
}
