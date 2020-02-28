import React from 'react';

class Subclass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detailsActive: false,
        }

        this.buildFeature = feature => {
            const htmlChunks = [];

            if (feature[0].name) {
                const nameChunk = <div className="italic-lead">{feature[0].name}</div>;
                htmlChunks.push(nameChunk);
            }

            for (let entry of feature[0].entries) {
                htmlChunks.push(this.buildEntry(entry));
            }

            
            return <div className="space-sequence-15">{htmlChunks}</div>;
        }

        this.buildEntry = entry => {
            const that = this;
            const entryHtmlChunk = [];

            _buildEntryChunksRecursively(entry);

            function _buildEntryChunksRecursively(entry) {
                if (typeof entry == "string") {
                    entryHtmlChunk.push(entry);
                    return;
                }

                if (entry.type == "table") {
                    entryHtmlChunk.push(that.buildEntryTypeTable(entry));
                }

                if (entry.type == "list") {
                    entryHtmlChunk.push(that.buildEntryTypeList(entry));
                }

                if (entry.name) {
                    entryHtmlChunk.push(<div className="embolden-600">{entry.name}</div>)
                }

                if (entry.entries) {
                    for (let subentry of entry.entries) {
                        _buildEntryChunksRecursively(subentry);
                    }
                }
                
            }

            return <div>{entryHtmlChunk}</div>

        }

        this.buildEntryTypeTable = entry => {
            
            return (
                <div className="table-outer">
                    <div className="caption">({entry.caption})</div>
                    <div className="table-inner">
                        <div className="table-header">
                            { 
                                entry.colLabels.map( label => {
                                    return <div className="table-col" key={label.trim()}>{label}</div>
                                })
                            }
                        </div>
                        {
                            entry.rows.map( row => {
                                return (
                                    <div className="table-row">
                                        {
                                            row.map( (colTxt, index) => {
                                               return <div className="table-col" key={index}>{colTxt}</div>
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

        this.buildEntryTypeList = entry => {
            
            function _getItemText(item) {
                if (item.type) {
                    return <li><strong>{item.name}</strong> {item.entry}</li>;
                }
                return <li>{item}</li>;
            }

            return (
                <ul>
                    { 
                        entry.items.map( item => {
                            return _getItemText(item);
                        })
                    }
                </ul>
            )
        }

        this.toggleDetailVisibility = () => {
            const currentState = this.state.detailsActive;
            this.setState({ detailsActive: !currentState });
        }
    }


    render() {
        
        const sc = this.props.subclass;
        
        return (
            <div className="content-block">
                <div className="content-preview" onClick={this.toggleDetailVisibility}>
                    <div className="content-preview-name">{sc.name}</div>
                        <div className="content-preview-subhead">{sc.source}</div>
                            <span className="toggle-content-visibility">
                                { this.state.detailsActive == false ? '+' : '-' }
                            </span>
                        </div>
                    <div className={this.state.detailsActive ? "content-detail active space-sequence-10" : "content-detail"}>
                        { sc.subclassFeatures.map(feature => this.buildFeature(feature) ) }
                    </div>
            </div>                        
        )



    }
}


export default Subclass;