import React from "react";
import "./LanguageSelections.scss";


class LanguageSelector extends React.Component {
    constructor(props) {

        super(props);

        this.getValidLanguageOptions = () => {
            const correctKeyReference = _getKeyReferenceForCorrectLanguageArray(this.props.languageOptionConstraints);
            
            return this.props.languagesDictionary[correctKeyReference];
        };

        this.calcNumOfSelectElemsToGenerate = () => {
            
            let numOfLanguagesAutoGranted = 0;
        
            for (const language of this.props.languageOptionConstraints) {
                if (language.isAutoGranted) {
                    numOfLanguagesAutoGranted++;
                }
            }
        
            return this.props.numberOfLanguagesGranted - numOfLanguagesAutoGranted;
        };

        this.buildArrayWithThisManyItems = () => {
            
            const elemsRequired = this.calcNumOfSelectElemsToGenerate();
            const someArray = [];
        
            for (let i = 0; i < elemsRequired; i++) {
                someArray.push(i);
            }
        
            return someArray;
        };

        this.state = {
            getValidLanguageOptions: this.getValidLanguageOptions,
            buildDummyArrayOfCorrectLength: this.buildArrayWithThisManyItems,
        };
    
    }


    render() {
        
        const currentBgRequiresChoice = _areLanguageOptionChoicesRequired(this.props.languageOptionConstraints);

        if (!currentBgRequiresChoice) {
            return <div></div>;
        }
  
        const validLanguageOptions = this.state.getValidLanguageOptions();
        const dummy_array_to_generate_correct_num_of_select_elems = this.state.buildDummyArrayOfCorrectLength();


        return (
            <div className="space-sequence-20">
                {dummy_array_to_generate_correct_num_of_select_elems.map(x => {
                    return (
                        <div key={x * 25}>
                            <select className="form-control">
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




function _getKeyReferenceForCorrectLanguageArray(languageOptionConstraints) {
    
    if (languageOptionConstraints[0].name == "ANY") {
        return 'ALL';
    }

    if (languageOptionConstraints[0].name == "EXOTIC") {
        return 'EXOTIC';
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
