import React from "react";
import "./ToolProficiencies.css";

// TODO - 
// 1. need to add custom rules
//     put this in a separate component
//     OPTIONS:
//          * 2 skills, 2 languages
//          * 2 skills, 2 tools
//          * 2 skills, 1 tool, 1 language
//          + any background feature
// 2. add basic input details
        // Alignment, 
        // Gender,
        // Eyes,
        // Size: Medium,
        // Height,
        // Faith,
        // Hair,
        // Skin,
        // Age,
        // Weight,


class ToolProficienciesSelector extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            equipment: this.props.equipment,
        }

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
        const toolOptions = _getValidOptions(this.props.toolOptions, this.state.equipment);




        return (
            <div className="space-sequence-20">
                {dummy_array_to_help_generate_correct_num_of_select_elems.map(x => {
                    return (
                        <div key={x * 25}>
                            <select className="form-control" onChange={this.handleSelection}>
                                <option value="" selected>- Choose a tool -</option>
                                {toolOptions.map(tool => {
                                    return (
                                        <option key={tool}>{tool}</option>
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




function _getValidOptions(tools, extraEquipment) {
    let standardOptions = [];

    let instruments = [];
    let artisanTools = [];
    let gamingSet = [];

    for (const tool of tools) {

        if (tool.name == "Musical Instrument") {
            if (!instruments.length) {
                instruments = extraEquipment.MUSICAL_INSTRUMENTS;
            }
            continue;
        }

        if (tool.name == "Artisan\'s Tools" ) {
            if (!artisanTools.length) {
                artisanTools = extraEquipment.ARTISAN_TOOLS;
            }
            continue;
        }
        
        if (tool.name == "Gaming Set") {
            if (!gamingSet.length) {
                gamingSet = extraEquipment.GAMING_SET;
            }
            continue;
        }

        if (tool.isAutoGranted == false) {
            standardOptions.push(tool.name);
        }

    }

    const validOptions = standardOptions.concat(instruments, artisanTools, gamingSet);
    
    return validOptions;
}

function _areToolOptionChoicesRequired(toolOptsArray) {

    for (const tool of toolOptsArray) {
        
        if (_checkForNotAutoGrantedOrExceptionStrings(tool)) {
            return true;
        }
    }

    return false;

}

function _calcNumOfSelectElemsToGenerate(numOftoolsGranted, toolOptionsArray) {
    let numOftoolsAutoGranted = 0;

    for (const tool of toolOptionsArray) {
        
        if (_checkForNotAutoGrantedOrExceptionStrings(tool)) {
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


function _checkForNotAutoGrantedOrExceptionStrings(tool) {
    if (
        !tool.isAutoGranted || 
        tool.name == "Musical Instrument" || 
        tool.name == "Artisan\'s Tools" || 
        tool.name == "Gaming Set"
    ) 
    {
        return true;
    }
    
    return false;
}