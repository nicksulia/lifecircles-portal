import React, { PureComponent } from 'react';
import './style.scss';

class SpecialistVisitCard extends PureComponent {

    componentDidMount() {
    }

    render() {
        return (
            <div className="specialist-info-list-elements-wrapper" onClick={() => { this.props.hide(null) } }>
                {this.props.data.name}
            </div>
        );
    }
}

export default SpecialistVisitCard;