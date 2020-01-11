import React from 'react';
import './CharDescription.css';
import AppDictionary from '../../Dictionary';



class CharDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skillsData: AppDictionary.SKILLS,
            languagesData: AppDictionary.LANGUAGES,
            backgroundData: AppDictionary.BACKGROUNDS,
        }

    }

    render() {
        return (
            <div className="space-sequence-20">
                <div>
                    <div>
                        <label>Character Name</label>
                        <input className="form-control"></input>
                    </div>
                </div>
                <div>
                    <select className="form-control">
                        {
                            this.state.skillsData.ByAlphabet.map(skill => {
                                return <option key={skill}>{skill}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <select className="form-control">
                        {
                            this.state.languagesData.map(language => {
                                return <option key={language.name}>{language.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}


export default CharDescription;
