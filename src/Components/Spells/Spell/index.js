import React from "react";
import './Spell.css';

class Spell extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            detailsActive: false,
        };

        this.toggleDetailDisplayState = () => {
            const currentState = this.state.detailsActive;
            this.setState({ detailsActive: !currentState });
        };
        
        this.getSpellDescriptHtmlBlock = () => {
            const spell = this.props.spell;
            
            spell.desc.map(chunk => {
                return <div>{chunk}</div>;
            })
        }

        this.buildDescTypeStr = desc => {
            return <div>{desc}</div>;
        }

        this.buildDescTypeEntries= desc => {
            return (
                <div className="label-text-pair-outer space-sequence-20">
                    <div>{desc.name}</div>
                    { 
                        desc.entries.map(entry => {
                            if (typeof entry == 'string') {
                                return <div>{entry}</div>;
                            }
                            if (entry.type) {
                                return (
                                    <ul>
                                    { 
                                        entry.items.map(item => {
                                            return <li>{item}</li>;
                                        })
                                    }
                                    </ul>
                                );
                            }
                        })
                    }
                </div>
            );
        }

        this.buildDescTypeList = desc => {
            return (
                <div>
                    <ul>
                        { 
                            desc.items.map(item => {
                                return <li>{item}</li>;
                            })
                        }
                    </ul>
                </div>
            );
        }

        this.buildDescTypeTable = desc => {
            // there appear to be two types of tables
            //def need to figure out a less awful way to differentiate
            let isType2 = false;
            
            try {
                isType2 = desc.rows[0][0].type ? true : false;
            }
            catch {
                isType2 = false;
            }

            if (isType2 == true) {
                return '';
            }

            return (
                <div className="table-outer">
                    <div className="caption">({desc.caption})</div>
                    <div className="table-inner">
                        <div className="table-header">
                            { 
                                desc.colLabels.map(label => {
                                    return <div className="table-col" key={label}>{label}</div>
                                })
                            }
                        </div>
                        {
                            desc.rows.map(row => {
                                return (
                                    <div className="table-row">
                                        {
                                            row.map(colTxt => {
                                               return <div className="table-col">{colTxt}</div>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )

        }

        this.buildHigherLevelHtml = higher_level => {
            if (higher_level) {
                return (
                    <div className="label-text-pair-outer">
                        <div>At Higher Levels.</div>
                        <div>{higher_level}</div>
                    </div>
                )
            }
            return '';
        }

    }

    
    render() {
        const spell = this.props.spell;
        const _buildSpellDescriptHtml = () => {
            let htmlDescriptChunkInner = [];

            for (const desc of this.props.spell.desc) {
                
                if (typeof desc == "string") {
                    htmlDescriptChunkInner.push(this.buildDescTypeStr(desc));
                    continue;
                }

                if (desc.hasOwnProperty("type")) {
                    const type = desc.type;
                
                    if (type == "entries")  { htmlDescriptChunkInner.push(this.buildDescTypeEntries(desc)); }
                    if (type == "list")     { htmlDescriptChunkInner.push(this.buildDescTypeList(desc)); }
                    if (type == "table")    { htmlDescriptChunkInner.push(this.buildDescTypeTable(desc)); }

                }
            }

            return (
                <div className="space-sequence-20">
                    {htmlDescriptChunkInner}
                </div>
            )
        
        }

        return (
            <div>
                <div className="spell-preview" onClick={this.toggleDetailDisplayState}>
                    <div className="spell-preview-name">{spell.name}</div> 
                    <div className="spell-preview-subhead">{spell.level} {spell.concentration === true ? " - Concentration" : ""}</div>
                    <span className="expand-spell">
                        { this.state.detailsActive == false ? '+' : '-' }
                    </span>
                </div>
                <div className={this.state.detailsActive ? "spell-detail active space-sequence-20" : "spell-detail"}>
                    <div>{spell.level} {spell.school}</div>
                    <div>
                        <div className="label-text-pair-outer">
                            <div>Casting Time</div>
                            <div>{spell.casting_time}</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Range/Area</div>
                            <div>THIS IS GONNA NEED A BIT O PROCESSING</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Components</div>
                            <div>{spell.components} { spell.material ? `(${spell.material})` : '' }</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Duration</div>
                            <div>{spell.duration}</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Source</div>
                            <div>{spell.page}</div>
                        </div>
                    </div>
                    <div>
                        { _buildSpellDescriptHtml() }
                    </div>
                    { this.buildHigherLevelHtml(spell.higher_level) }
                </div>
            </div>
        )
    }
}

export default Spell;
