import React from 'react';
import './CharDescription.css';
import AppDictionary from '../../Dictionary';

import SkillProficienciesSelector from './SkillProficiencies';
import ToolProficienciesSelector from './ToolProficiencies';
import LanguageSelector from './LanguageSelections';


class CharDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skillsData: AppDictionary.SKILLS,
            languagesData: AppDictionary.LANGUAGES,
            backgroundData: AppDictionary.BACKGROUNDS,
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

            for (const bg of this.state.backgroundData) {
                if (chosenBgName == bg.name) {
                    debugger;
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
                                languageOptions={this.state.selectedBg.languageOptions}
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

    }

    render() {
        const selectedBackgroundHtmlChunk = this.buildHtmlChunks();

        return (
            <div className="space-sequence-20">
                <div>
                    <div>
                        <label>Character Name</label>
                        <input className="form-control"></input>
                    </div>
                </div>
                <div>
                    <div>Background</div>
                    <div>
                        <select className="form-control" onChange={this.handleBgSelection}>
                            <option value="" key="" selected>Choose a Background</option>
                            {
                                this.state.backgroundData.map(bg => {
                                    return <option key={bg.name}>{bg.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>

                { selectedBackgroundHtmlChunk }
                
            </div>
        )
    }
}


export default CharDescription;
