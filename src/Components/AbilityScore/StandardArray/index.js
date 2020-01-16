import React from 'react';
import './StandardArray.css';



class StandardArray extends React.Component {
    constructor(props) {
        super(props)

        this.allOptions = _getStandardArrayValues();

        this.state = {
            hashTable: _buildHashMap(this.props.attributes),
        }

        this.handleSelection = event => {

            const optionValuesSplit = event.target.value.split('_');
            const newSelectedScore = optionValuesSplit[0];
            const updatedAttrId = optionValuesSplit[1];
            const hashTable = this.state.hashTable;
            const attrIds = Object.keys(hashTable);
            

            // more simple attempt. 
            // put the toy back in the toybox
            for (const attrId of attrIds) {
                // when you get to the item that was updated.
                if (attrId == updatedAttrId) {
                    //if there was a previous selection, 
                    if (hashTable[attrId].selectedVal != '--') {
                        // find the value that has to be put back into the pool
                        const valToPutBack = hashTable[attrId].selectedVal;

                        // looping them again
                        for (const attrId of attrIds) {
                            //skip the attr that was updated
                            if (attrId == updatedAttrId) {
                                continue;
                            }

                            //make sure it doesn't have the val somehow
                            const indexOfValToPutBack = hashTable[attrId].availOptions.indexOf(valToPutBack);
                            // as long as it doesn't already have it
                            if (indexOfValToPutBack == -1) {
                                const whereToPutItBack = _getIndexOfCorrectOptForThisPool(valToPutBack, hashTable[attrId].availOptions);
                                //put that selection back in the pool for all the other items
                                hashTable[attrId].availOptions.splice(whereToPutItBack, 0, valToPutBack);
                            }
                        }
                    }

                    //update the previous selection val to keep the state clean
                    hashTable[updatedAttrId].selectedVal = newSelectedScore;
                    break;
                }
            }

            // pull the new toy out of the toybox
            if (newSelectedScore != '--') {
                for (const attrId of attrIds) {
                    // ignore the updated item
                    if (attrId == updatedAttrId) {
                        continue;
                    }

                    // for all others

                    // get an easier reference
                    const thisAttrOptsPool = hashTable[attrId].availOptions;
                    // IMPORTANT NOTE: index will almost certainly vary between attributes, SO
                    // we must figure out the right index in THIS pool 
                    const indexOfItemInThisAttrOptsPool = thisAttrOptsPool.indexOf(newSelectedScore);
                    // double check to make sure the item is in the pool
                    if (indexOfItemInThisAttrOptsPool != -1) { 
                        // splice the item that was added at the correct index for THIS options pool.
                        thisAttrOptsPool.splice(indexOfItemInThisAttrOptsPool, 1);
                    }
                }
            }
            
            // set the damned state
            this.setState({
                hashTable: hashTable,
            })

            // update the attribute prop for export
            for (const attr of this.props.attributes) {
                if (attr.id == updatedAttrId) {
                    
                    if (newSelectedScore == '--') {
                        attr.previousAssignedScore = attr.currentAssignedScore;
                        attr.currentAssignedScore = 8;  // setting this 8 so it behaves consistently with the parent component
                        this.props.callbackToGetAttributes(this.props.attributes) // callback handler;
                        return;
                    }

                    attr.previousAssignedScore = attr.currentAssignedScore;
                    attr.currentAssignedScore = newSelectedScore;
                    this.props.callbackToGetAttributes(this.props.attributes) // callback handler;
                    return;
                }

            }
            

        }

    }


    getCurrentOptions = () => {
        return this.availOptions;
    }

    render() {
        
        if (this.props.activeMethod != 'StandardArray') {
            return null;
        }

        return (
            <div className="content-wrap space-sequence-20">
                <div>
                    <form>
                        <div className="big-ole-table-outer">
                            <div className="tbl-row">
                                {this.props.attributes.map(attr => {
                                    return (
                                        <div className="tbl-cell" key={attr.name}>
                                            <div className="asi-heading">{attr.name}</div>
                                            <div className="asi-val-select-outer">
                                                <select className="form-control" onChange={this.handleSelection}>
                                                    {
                                                        this.state.hashTable[attr.id].availOptions.map(opt => {
                                                            return (
                                                                <option value={opt + '_' + attr.id} key={opt + '_' + attr.id}>
                                                                    {opt}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}


export default StandardArray;


function _buildHashMap(attributes) {
    let hashMap = {};

    for (const attr of attributes) {
        hashMap[attr.id] = {
            selectedVal: '--',
            availOptions: _getStandardArrayValues(),
        }
    }

    return hashMap;
}

function _getStandardArrayValues() {
    return ['--', '8', '10', '12', '13', '14', '15'];
}


function _getIndexOfCorrectOptForThisPool(comparisonVal, someFlatArray) {
    const compInt = parseInt(comparisonVal);
    // first item is always '--', so skip
    for (let i = 1; i < someFlatArray.length; i++) {
        const num = parseInt(someFlatArray[i]);
        if (compInt < num) {
            return i;
        }
    }
    
    return someFlatArray.length;
}