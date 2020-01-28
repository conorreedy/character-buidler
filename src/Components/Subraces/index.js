import React from 'react';
import './Subraces.scss';


class Subraces extends React.Component {
    constructor(props) {
        
        super(props);

    }

    render() {

        const subraces = this.props.subraces ? this.props.subraces : [];

        const htmlBlockForNoSubraces = <span></span>;
        const htmlBlockForSubraces = (
            <div>
                <label>Choose a Subrace</label>
                <select className="form-control">
                    <option value="" key="100000000" selected disabled>Make a selection</option>
                    {subraces.map(x => <option value={x.id} key={x.id}>{x.name}</option>)}
                </select>
            </div>
        )
        const htmlBlockToReturn = subraces.length ? htmlBlockForSubraces : htmlBlockForNoSubraces;
        
        return (
            <div>{htmlBlockToReturn}</div>
        );
    }
}

export default Subraces;