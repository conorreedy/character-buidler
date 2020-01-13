import React from "react";
import "./LanguageSelections.css";


class LanguageSelector extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            allLanguages: this.props.languagesDictionary.ALL,
            exoticLanguages: this.props.languagesDictionary.EXOTIC,
        }

        this.handleSelection = (event) => {
            
        }

    }


    render() {
        
        const currentBgRequiresChoice = _areLanguageOptionChoicesRequired(this.props.languageOptions);

        if (!currentBgRequiresChoice) {
            return <div></div>;
        }

        const numOfSelectElemsToGenerate = _calcNumOfSelectElemsToGenerate(this.props.numberOfLanguagesGranted, this.props.languageOptions);
        const dummy_array_to_help_generate_correct_num_of_select_elems = _buildArrayWithThisManyItems(numOfSelectElemsToGenerate);
        const validLanguageOptions = this.state[ _getKeyReferenceForCorrectLanguageArray(this.props.languageOptions) ];
        
        return (
            <div className="space-sequence-20">
                {dummy_array_to_help_generate_correct_num_of_select_elems.map(x => {
                    return (
                        <div key={x * 25}>
                            <select className="form-control" onChange={this.handleSelection}>
                                <option value="" selected>- Choose a Language -</option>
                                { validLanguageOptions.map(language => {
                                    return (
                                        <option key={language.name}>{language.name}</option>
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


export default LanguageSelector;




function _getKeyReferenceForCorrectLanguageArray(languageOptions) {
    
    if (languageOptions[0].name == "ANY") {
        return 'allLanguages';
    }

    if (languageOptions[0].name == "EXOTIC") {
        return 'exoticLanguages';
    }
    
}

function _areLanguageOptionChoicesRequired(languageOptsArray) {

    for (const language of languageOptsArray) {

        if (!language.isAutoGranted) {
            return true;
        }
    }

    return false;

}

function _calcNumOfSelectElemsToGenerate(totalNumOfLanguagesGranted, languageOptionsArray) {
    let numOfLanguagesAutoGranted = 0;

    for (const language of languageOptionsArray) {
        if (language.isAutoGranted) {
            numOfLanguagesAutoGranted++;
        }
    }

    return totalNumOfLanguagesGranted - numOfLanguagesAutoGranted;

}

function _buildArrayWithThisManyItems(elemsRequired) {
    const someArray = [];

    for (let i = 0; i < elemsRequired; i++) {
        someArray.push(i);
    }

    return someArray;
}
