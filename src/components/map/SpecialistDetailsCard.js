import React, { PureComponent } from 'react';
import './details.scss';

class SpecialistDetailsCard extends PureComponent {

    componentDidMount() {
    }

    render() {
        return (
            <div className="specialist-details-card-wrapper">
                <p>{this.props.displayedSpecialist.description}</p>
                <div className="specialist-info-visit-element">
                    <span className="specialist-info-visit-element-title">Work with parents:</span>
                    <span>Family maintaince, work with parents</span>
                </div>
                <div className="specialist-info-details-element">
                    <span className="specialist-info-visit-element-title">Area of competence:</span>
                    <span>Habilitation, Garden, Special Programs, Family Support, Socialization, Group Classes, Charitable funds</span>
                </div>
                <span className="update-info">last update {this.props.displayedSpecialist.modified_date}</span>
                <div className="close-details" onClick={this.props.displayDetails}><span></span></div>
            </div>
        );
    }
}

export default SpecialistDetailsCard;
