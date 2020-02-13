import React from 'react';

class Subclass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sc: this.props.subclass,
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
            
            const entryHtmlChunk = [];

            _buildEntryChunksRecursively(entry);

            function _buildEntryChunksRecursively(entry) {
                if (typeof entry == "string") {
                    entryHtmlChunk.push(entry);
                    return;
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

        this.toggleDetailVisibility = () => {
            const currentState = this.state.detailsActive;
            this.setState({ detailsActive: !currentState });
        }
    }

    render() {
        const sc = this.state.sc;
        
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
                        { sc.subclassFeatures.map(feature => this.buildFeature(feature)) }
                    </div>
            </div>                        
        )



    }
}


export default Subclass;