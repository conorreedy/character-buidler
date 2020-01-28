import React from "react";
import './RaceForm.scss';

import AppDictionary from '../../Dictionary';
import Races from '../Races/index.js';
import Subraces from '../Subraces';


class RaceSelectionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedRaceId: '',
            selectedSubraceId: '',
        }


        this.handleRaceSelection = event => {
            this.setState({
                selectedRaceId: event.target.value,
                selectedSubraceId: '',
            })
        }

        this.handleSubRaceSelection = event => {
            this.setState({
                selectedSubraceId: event.target.value
            })
        }
        
    }


    render() {
        const { selectedRaceId, selectedSubraceId} = this.state;
        
        const activeRace = selectedRaceId ? _getItemFromArrayWithId(selectedRaceId, AppDictionary.RACE_DATA) : false;
        const activeSubrace = selectedSubraceId ? _getItemFromArrayWithId(selectedSubraceId, activeRace.subraces) : false;

        let raceDetailHtml;        
        let subraceDetailHtml;

        // TODO: 
        // make an active race html block for active race only scenarios
        // make a more clear combined html for active race + active subrace scenarios

        if (activeRace) {

            const racialFeatureHtmlBlocks = activeRace.features.length ? _buildRacialFeatureHtmlBlocks(activeRace.features) : '';
            const languagesString = _buildLanguagesString(activeRace.languages);
            const racialTraitsStr = _buildRacialTraitsString(activeRace);

            raceDetailHtml = (
                <div >
                    <div className="content-block">
                        <div>Race:</div>
                        <div>{activeRace.name}</div>
                    </div>
                    <div className="content-block">
                        <div>Racial Traits:</div>
                        <div>{racialTraitsStr}</div>
                    </div>
                    <div className="content-block">
                        <div>Summary:</div>
                        <div>{activeRace.summary}</div>
                    </div>
                    <div className="content-block">
                        <div>Movement:</div>
                        <div>{activeRace.movement} feet</div>
                    </div>
                    <div className="content-block">
                        <div>Languages:</div>
                        <div>{languagesString}</div>
                    </div>
                    <div className="content-block">
                        <div>Lifespan:</div>
                        <div>{activeRace.lifespan}</div>
                    </div>
                    <div className="content-block">
                        <div>Alignment:</div>
                        <div>{activeRace.alignment}</div>
                    </div>

                    {racialFeatureHtmlBlocks}

                </div>
            );
        }

        if (activeSubrace) {
            const subracialFeatureHtmlBlock = activeSubrace.features.length ? _buildRacialFeatureHtmlBlocks(activeSubrace.features) : '';
            const asiString = _buildAsiString(activeSubrace.asis);
            
            subraceDetailHtml = (
                <div>
                    <div className="content-block">
                        <div>Subrace Name:</div>
                        <div>{activeSubrace.name}</div>
                    </div>
                    <div className="content-block">
                        <div>Ability Score Increase:</div>
                        <div>{asiString}</div>
                    </div>

                    {subracialFeatureHtmlBlock}

                </div>
            )
        }

        return (
            <div>
                <div>
                    <form onChange={this.handleRaceSelection} key="raceForm">
                        <Races></Races>
                    </form>
                    <form onChange={this.handleSubRaceSelection} key="subraceForm">
                        <Subraces subraces={activeRace.subraces}></Subraces>
                    </form>
                </div>
                <div>
                    {raceDetailHtml}
                    {subraceDetailHtml}
                </div>
            </div>
        )
    }
}



function _getItemFromArrayWithId(someId, someArray) {
    for (const oneItem of someArray) {
        if (someId == oneItem.id) {
            return oneItem;
        }
    }
}

function _buildRacialFeatureHtmlBlocks(features) {

    const racialFeatureHtmlArray = [];
        
        for (const feat of features) {

            const featName = Object.keys(feat)[0];
            const featDesc = feat[featName];

            const block = (
                <div className="content-block">
                    <div>{featName}</div>
                    <div>{featDesc}</div>
                </div>
            )
            
            racialFeatureHtmlArray.push(block);
        }

    return racialFeatureHtmlArray;
}

function _buildLanguagesString(languages) {
    let languagesStr = 'You can speak, read, and write';

    const lastIndex = languages.length - 1; 

    for (let i=0; i < languages.length; i++) {
        
        const language = languages[i];
        
        // add commas because more than 2 options =>  x, y, and z
        if (i != lastIndex && lastIndex > 1) {
            languagesStr = `${languagesStr} ${language}, `;
        }
        // no commas needed because there are only 2 options => x and y 
        if (i != lastIndex) {
            languagesStr = `${languagesStr} ${language} `;
        }
        // if last, then check the rules again
        if (i === lastIndex) {
            // if a number, then it's free languages of the player's choice
            if (typeof language == 'number') {
                languagesStr = `${languagesStr} and ${language} extra language${language > 1 ? 's': ''} of your choice.`;
            }
            // if it's text, it's just another fixed language option to be displayed
            if (typeof language == 'string') {
                languagesStr = `${languagesStr} and ${language}.`;
            }

        }
        
    }

    return languagesStr;
}

function _buildRacialTraitsString(race) {
    // string format: +2 Dex, +1 Whatev, Feature1, Feature2, Feature3

    let racialTraitsArr = [];
    
    if (race.asis.length) {
        const asiString = _buildAsiString(race.asis);
        racialTraitsArr.push(asiString);
    }

    if (race.features.length) {
        
        for (const feat of race.features) {
            const featName = Object.keys(feat)[0];
            racialTraitsArr.push(featName);
        }

    }

    return racialTraitsArr.join(', ');
}


function _buildAsiString(asis) {
    let asiArr = [];

    for (const asi of asis) {
        const attribute = Object.keys(asi)[0];
        const numVal = asi[attribute];
        const plusOrMinusSymbol = Math.sign(asi[attribute]) == 1 ? '+' : '-'; 

        const stringChunk = `${plusOrMinusSymbol}${numVal} ${attribute}`;

        asiArr.push(stringChunk)
    }

    return asiArr.join(', ');
}

export default RaceSelectionForm;