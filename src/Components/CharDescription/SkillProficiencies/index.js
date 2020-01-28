import React from "react";
import "./SkillProficiencies.scss";


class SkillProficienciesSelector extends React.Component {
    constructor(props) {

        super(props);

        this.handleSelection = (event) => {
            
        }

    }


    render() {

        const currentBgRequiresChoice = _areSkillOptionChoicesRequired(this.props.skillOptions);

        if (!currentBgRequiresChoice) {
            return <div></div>;
        }

        const numOfSelectElemsToGenerate = _calcNumOfSelectElemsToGenerate(this.props.numberOfSkillsGranted, this.props.skillOptions);
        const dummy_array_to_help_generate_correct_num_of_select_elems = _buildArrayWithThisManyItems(numOfSelectElemsToGenerate);
        const skillOptions = _getValidOptions(this.props.skillOptions);

        return (
            <div className="space-sequence-20">
                {dummy_array_to_help_generate_correct_num_of_select_elems.map(x => {
                    return (
                        <div key={x * 25}>
                            <select className="form-control" onChange={this.handleSelection}>
                                <option value="" selected>- Choose a Skill -</option>
                                {skillOptions.map(skill => {
                                    return (
                                        <option key={skill.name}>{skill.name}</option>
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


export default SkillProficienciesSelector;




function _getValidOptions(skills) {
    let validOptions = [];

    for (const skill of skills) {

        if (skill.isAutoGranted == false) {
            validOptions.push(skill);
        }

    }

    return validOptions;
}

function _areSkillOptionChoicesRequired(skillOptsArray) {

    for (const skill of skillOptsArray) {

        if (!skill.isAutoGranted) {
            return true;
        }
    }

    return false;

}

function _calcNumOfSelectElemsToGenerate(numOfSkillsGranted, skillOptionsArray) {
    let numOfSkillsAutoGranted = 0;

    for (const skill of skillOptionsArray) {
        if (skill.isAutoGranted) {
            numOfSkillsAutoGranted++;
        }
    }

    return numOfSkillsGranted - numOfSkillsAutoGranted;

}

function _buildArrayWithThisManyItems(elemsRequired) {
    const someArray = [];

    for (let i = 0; i < elemsRequired; i++) {
        someArray.push(i);
    }

    return someArray;
}
