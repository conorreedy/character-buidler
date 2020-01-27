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
            
            spell.desc.map( chunk => {
                return <div key={_getRandoNum()}>{chunk}</div>;
            })
        }

        this.rangeTextHash = {
            "point": {
                "touch": "Touch",
                "self": "Self",
                "sight": "Sight",
                "unlimited": "Unlimited",
                "amount": `${this.props.spell.range.distance.amount} ${this.props.spell.range.distance.type}`,
            },
            "radius": `${this.props.spell.range.distance.amount} ${this.props.spell.range.distance.type} radius`,
            "sphere": `${this.props.spell.range.distance.amount} ${this.props.spell.range.distance.type} sphere`,
            "cone": `${this.props.spell.range.distance.amount} ${this.props.spell.range.distance.type} cone`,
        }

        this.getRangeTextFromHash = () => {
            const range = this.props.spell.range ;
            const type = this.props.spell.range.type;

            if (type == 'point') {
                
                if (range.distance.hasOwnProperty('amount')) {
                    return this.rangeTextHash.point.amount;
                }

                return this.rangeTextHash.point[range.distance.type];
            }
            
            return this.rangeTextHash[type];

        }

        this.buildDescTypeStr = desc => {
            return <div key={_getRandoNum()}>{desc}</div>;
        }

        this.buildDescTypeEntries= desc => {
            return (
                <div className="label-text-pair-outer space-sequence-20" key={_getRandoNum()}>
                    <div>{desc.name}.</div>
                    { 
                        desc.entries.map( entry => {
                            if (typeof entry == 'string') {
                                return <div key={_getRandoNum()}>{entry}</div>;
                            }
                            if (entry.type) {
                                return (
                                    <ul key={_getRandoNum()}>
                                    { 
                                        entry.items.map( item => {
                                            return <li key={_getRandoNum()}>{item}</li>;
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
                <div key={_getRandoNum()}>
                    <ul>
                        { 
                            desc.items.map( item => {
                                return <li key={_getRandoNum()}>{item}</li>;
                            })
                        }
                    </ul>
                </div>
            );
        }

        this.buildDescTypeTable = desc => {
            // there are two types of tables
            //prob need to figure out a less awful way to differentiate
            let isType2 = false;
            
            try {
                isType2 = desc.rows[0][0].type ? true : false;
            }
            catch {
                isType2 = false;
            }

            if (isType2 == true) {
                return (
                    <div className="table-outer" key={_getRandoNum()}>
                        <div className="caption">({desc.caption})</div>
                        <div className="table-inner">
                            <div className="table-header">
                                { 
                                    desc.colLabels.map( label => {
                                        return <div className="table-col" key={_getRandoNum()}>{label}</div>
                                    })
                                }
                            </div>
                            {
                                desc.rows.map( row => {
                                    return (
                                        <div key={_getRandoNum()} className="table-row">
                                            {
                                                row.map( col => {
                                                    if (typeof col != "string") {
                                                        const min = col.roll.min < 10 ? `0${col.roll.min}` : col.roll.min;
                                                        const max = col.roll.max < 10 ? `0${col.roll.max}` : col.roll.max;
                                                        const str = `${min} - ${max}`;
                                                        
                                                        return <div className="table-col" key={_getRandoNum()}>{str}</div>
                                                    }

                                                   return <div className="table-col" key={_getRandoNum()}>{col}</div>
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

            return (
                <div className="table-outer" key={_getRandoNum()}>
                    <div className="caption">({desc.caption})</div>
                    <div className="table-inner">
                        <div className="table-header">
                            { 
                                desc.colLabels.map( label => {
                                    return <div className="table-col" key={_getRandoNum()}>{label}</div>
                                })
                            }
                        </div>
                        {
                            desc.rows.map( row => {
                                return (
                                    <div key={_getRandoNum()} className="table-row">
                                        {
                                            row.map( colTxt => {
                                               return <div className="table-col" key={_getRandoNum()}>{colTxt}</div>
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
            const htmlDescriptChunkInner = [];

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
                    <div className="spell-preview-subhead">{spell.level} {spell.concentration === true ? <span>&bull; Concentration</span> : ""}</div>
                    <span className="expand-spell">
                        { this.state.detailsActive == false ? '+' : '-' }
                    </span>
                </div>
                <div className={this.state.detailsActive ? "spell-detail active space-sequence-20" : "spell-detail"}>
                    <div className="italic-lead">{spell.level} {spell.school}</div>
                    <div>
                        <div className="label-text-pair-outer">
                            <div>Casting Time.</div>
                            <div>{spell.casting_time}</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Range/Area.</div>
                            <div>{this.getRangeTextFromHash()}</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Components.</div>
                            <div>{spell.components} { spell.material ? `(${spell.material})` : '' }</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Duration.</div>
                            <div>{spell.duration}</div>
                        </div>
                        <div className="label-text-pair-outer">
                            <div>Source.</div>
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



function _getRandoNum() {
    return Math.random();
}