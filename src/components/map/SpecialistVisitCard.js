import React, { PureComponent } from 'react';
import './style.scss';

class SpecialistVisitCard extends PureComponent {

    componentDidMount() {
    }

    render() {
        return (
            <div className="specialist-info-visit-elements-wrapper" onClick={() => { this.props.hide(null) } }>
                <div className="exit-arrow-wrapper">
                    <span className="exit-arrow-container">
                        <span className="exit-arrow-icon"/>
                    </span>
                    <span className="exit-arrow-text">back to the list</span>
                </div>
                <div className="specialist-info-visit-element-header">{this.props.data.name}</div>
                <div className="specialist-info-visit-element">
                    <span className="specialist-info-visit-element-title">Address:</span>
                    <span>{this.props.data.address}</span>
                </div>
                <div className="specialist-info-visit-element">
                    <span className="specialist-info-visit-element-title">Phone:</span>
                    <span>{this.props.data.phone}</span>
                </div>
                <div className="specialist-info-visit-element">
                    <span className="specialist-info-visit-element-title">Website:</span>
                    <span>{this.props.data.web_site}</span>
                </div>
                <div className="specialist-info-visit-element">
                    <span className="specialist-info-visit-element-title">Expirience:</span>
                    <span>{this.props.data.expirience}</span>
                </div>
                <div className="specialist-info-visit-element inline-flex">
                    <div className="specialist-info-visit-element-recommended">
                        <span></span>
                        <span>{this.props.data.recommended} people recommended</span>
                    </div>
                    <div className="specialist-info-visit-element-update">
                        <span>last update</span>
                        <span>{this.props.data.modified_date}</span>
                    </div>
                </div>
                <div className="specialist-info-visit-element">
                    <div className="recommend-button">I recommend them!</div>
                </div>
            </div>
        );
    }
}

export default SpecialistVisitCard;