import React from 'react';
import './CharDescription.css';
import AppDictionary from '../../Dictionary';

import SkillProficienciesSelector from './SkillProficiencies';
import ToolProficienciesSelector from './ToolProficiencies';
import LanguageSelector from './LanguageSelections';
import CustomBgSelector from './CustomBg';
import { unstable_batchedUpdates } from 'react-dom';

// TODO :
// 1. eventually - we should have the related dropdowns update on selection 
// - eg - on selection of skill, remove that skill from the other related dropdown
// - eg - on selection of a higher order item, like instruments - remove that subset of options from array,
// this is not MVP - this will be a PITA 


class CharDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skillsData: AppDictionary.SKILLS,
            languagesData: AppDictionary.LANGUAGES,
            backgroundData: AppDictionary.BACKGROUNDS,
            bgFeatures: AppDictionary.BACKGROUND_FEATURES,
            equipment: AppDictionary.EQUIPMENT,
            selectedBg: false,
        }

        this.handleBgSelection = event => {
            const chosenBgName = event.target.value;

            if (!chosenBgName) {
                this.setState({
                    selectedBg: false,
                })
            }

            if (chosenBgName == 'customBg') {
                this.setState({
                    selectedBg: chosenBgName,
                })
                return;
            }

            for (const bg of this.state.backgroundData) {
                if (chosenBgName == bg.name) {
                    this.setState({
                        selectedBg: bg,
                    });
                    return;
                }
            }
        }

        this.buildHtmlChunks = () => {

            let htmlBlockForUserSelectedBackground;

            if (this.state.selectedBg == false) {
                return htmlBlockForUserSelectedBackground = <div></div>;
            }

            // make sure to return early in this condition state since the bg will no longer
            // be false, but it will not be the full object
            if (this.state.selectedBg == 'customBg') {

                htmlBlockForUserSelectedBackground = (
                    <CustomBgSelector
                        skillsData={this.state.skillsData}
                        languageData={this.state.languagesData}
                        equipment={this.state.equipment}
                        bgFeatures={this.state.bgFeatures}></CustomBgSelector>
                )

                return htmlBlockForUserSelectedBackground;
            }

            const skillsChunk = () => {
                return (
                    <div className="space-sequence-20">
                        <div>
                            <div>{this.state.selectedBg.description}</div>
                        </div>
                        <div>
                            <strong>Skill Proficiencies: </strong>
                            {
                                this.state.selectedBg.skillOptions.map((skill, index) => {
                                    const isLast = index == this.state.selectedBg.skillOptions.length - 1 ? true : false;

                                    if (skill.isAutoGranted) {
                                        const strChunk = isLast ? `${skill.name}` : `${skill.name}, `;
                                        return strChunk;
                                    }

                                })
                            }
                        </div>
                        <div>
                            <SkillProficienciesSelector
                                skillOptions={this.state.selectedBg.skillOptions}
                                numberOfSkillsGranted={this.state.selectedBg.numberOfSkillsGranted}></SkillProficienciesSelector>
                        </div>
                    </div>
                )
            }
            const languagesChunk = () => {
                if (this.state.selectedBg.numberOfExtraLanguages == 0) {
                    return <div></div>;
                }

                return (
                    <div className="space-sequence-20">
                        <div>
                            <strong>Languages: </strong>
                            {
                                this.state.selectedBg.languageOptions.map((language, index) => {
                                    const isLast = index == this.state.selectedBg.languageOptions.length - 1 ? true : false;
                                    if (language.isAutoGranted) {
                                        const strChunk = isLast ? `${language.name}` : `${language.name}, `;
                                        return strChunk;
                                    }

                                })
                            }
                        </div>
                        <div>
                            <LanguageSelector
                                numberOfLanguagesGranted={this.state.selectedBg.numberOfExtraLanguages}
                                languageOptionConstraints={this.state.selectedBg.languageOptions}
                                languagesDictionary={AppDictionary.LANGUAGES}></LanguageSelector>
                        </div>
                    </div>
                )
            }

            const toolsChunk = () => {
                if (this.state.selectedBg.numberOfToolsGranted == 0) {
                    return <div></div>;
                }

                return (
                    <div className="space-sequence-20">
                        <div>
                            <strong>Tool Proficiencies: </strong>
                            {
                                this.state.selectedBg.toolOptions.map((tool, index) => {
                                    const isLast = index == this.state.selectedBg.toolOptions.length - 1 ? true : false;

                                    if (tool.isAutoGranted) {
                                        const strChunk = isLast ? `${tool.name}` : `${tool.name}, `;
                                        return strChunk;
                                    }

                                })
                            }
                        </div>
                        <div>
                            <ToolProficienciesSelector
                                toolOptions={this.state.selectedBg.toolOptions}
                                numberOfToolsGranted={this.state.selectedBg.numberOfToolsGranted}
                                equipment={this.state.equipment} ></ToolProficienciesSelector>
                        </div>
                    </div>
                );
            }

            const bgFeatureChunk = () => {
                return (
                    <div className="space-sequence-20">
                        <div>
                            <div>{this.state.selectedBg.backgroundFeature.name}</div>
                            <div>Background Feature</div>
                        </div>
                        <div>
                            <div>{this.state.selectedBg.backgroundFeature.description}</div>
                        </div>
                    </div>
                );
            }

            const alternateBgFeatureChunk = () => {
                if (!this.state.selectedBg.alternateBackgroundFeature.name) {
                    return <div></div>;
                }

                return (
                    <div className="space-sequence-20">
                        <div>
                            <div>{this.state.selectedBg.alternateBackgroundFeature.name}</div>
                            <div>Alternate Background Feature</div>
                        </div>
                        <div>
                            <div>{this.state.selectedBg.alternateBackgroundFeature.description}</div>
                        </div>
                    </div>
                )
            }

            htmlBlockForUserSelectedBackground = (
                <div className="space-sequence-20">
                    {skillsChunk()}

                    {toolsChunk()}

                    {languagesChunk()}

                    {bgFeatureChunk()}

                    {alternateBgFeatureChunk()}

                </div>
            )
            return htmlBlockForUserSelectedBackground;
        }

        this.buildPhysicalCharacteristicsChunk = () => {
            return (
                <div className="space-sequence-20">
                    <div><strong>Physical Characteristics:</strong></div>
                    <div>
                        <div><strong>Hair</strong></div>
                        <div><input className="form-control"></input></div>
                    </div>
                    <div>
                        <div><strong>Skin</strong></div>
                        <div><input className="form-control"></input></div>
                    </div>
                    <div>
                        <div><strong>Eyes</strong></div>
                        <div><input className="form-control"></input></div>
                    </div>
                    <div>
                        <div><strong>Height</strong></div>
                        <div><input className="form-control"></input></div>
                    </div>
                    <div>
                        <div><strong>Weight</strong></div>
                        <div><input className="form-control"></input></div>
                    </div>
                    <div>
                        <div><strong>Age</strong></div>
                        <div><input className="form-control"></input></div>
                    </div>
                    <div>
                        <div><strong>Gender</strong></div>
                        <div><input className="form-control"></input></div>
                    </div>
                </div>
            )
        }
    }

    render() {
        const selectedBackgroundHtmlChunk = this.buildHtmlChunks();
        const physicalCharacteristicsHtmlChunk = this.buildPhysicalCharacteristicsChunk();
        return (
            <div className="space-sequence-20">
                <div>
                    <div>
                        <div><strong>Character Name:</strong></div>
                        <input className="form-control"></input>
                    </div>
                </div>
                <div>
                    <div><strong>Background:</strong></div>
                    <div>
                        <select className="form-control" onChange={this.handleBgSelection}>
                            <option value="" selected>-- Choose a Background ---</option>
                            <option value="customBg">Custom Background</option>
                            {
                                this.state.backgroundData.map(bg => {
                                    return <option key={bg.name}>{bg.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>

                {selectedBackgroundHtmlChunk}

                {physicalCharacteristicsHtmlChunk}

            </div>
        )
    }
}


export default CharDescription;
