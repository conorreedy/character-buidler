import React from "react";
import "./ToolProficiencies.css";

// TODO - need to integrate the actual musical instruments and artisan tools
// this can either be done 2 ways:
    // 1. replace the general 'musical instrument' option with its list 
    // 2. just add a couple more dropdowns. 
// 1 is a PITA because eventually we'll need to filter the rest of the type when selected, but 2 is prob more annoying to user
// note: the data is passed in under this.props.equipment

class ToolProficienciesSelector extends React.Component {
    constructor(props) {

        super(props);

        this.handleSelection = (event) => {
            
        }

    }


    render() {

        const currentBgRequiresChoice = _areToolOptionChoicesRequired(this.props.toolOptions);

        if (!currentBgRequiresChoice) {
            return <div></div>;
        }

        const numOfSelectElemsToGenerate = _calcNumOfSelectElemsToGenerate(this.props.numberOfToolsGranted, this.props.toolOptions);
        const dummy_array_to_help_generate_correct_num_of_select_elems = _buildArrayWithThisManyItems(numOfSelectElemsToGenerate);
        const toolOptions = _getValidOptions(this.props.toolOptions);

        return (
            <div className="space-sequence-20">
                {dummy_array_to_help_generate_correct_num_of_select_elems.map(x => {
                    return (
                        <div key={x * 25}>
                            <select className="form-control" onChange={this.handleSelection}>
                                <option value="" selected>- Choose a tool -</option>
                                {toolOptions.map(tool => {
                                    return (
                                        <option key={tool.name}>{tool.name}</option>
                                    );
                                })
                                }
                            </select>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}


export default ToolProficienciesSelector;




function _getValidOptions(tools) {
    let validOptions = [];

    for (const tool of tools) {

        if (tool.isAutoGranted == false) {
            validOptions.push(tool);
        }

    }

    return validOptions;
}

function _areToolOptionChoicesRequired(toolOptsArray) {

    for (const tool of toolOptsArray) {

        if (!tool.isAutoGranted) {
            return true;
        }
    }

    return false;

}

function _calcNumOfSelectElemsToGenerate(numOftoolsGranted, toolOptionsArray) {
    let numOftoolsAutoGranted = 0;

    for (const tool of toolOptionsArray) {
        if (tool.isAutoGranted) {
            numOftoolsAutoGranted++;
        }
    }

    return numOftoolsGranted - numOftoolsAutoGranted;

}

function _buildArrayWithThisManyItems(elemsRequired) {
    const someArray = [];

    for (let i = 0; i < elemsRequired; i++) {
        someArray.push(i);
    }

    return someArray;
}
