import React, { PureComponent } from 'react';
import './style.scss';

const diagnosis = {
    'autism': 'Autism',
    'cerebral': 'Cerebral palsy',
    'down': 'Down syndrome',
    'hearing': 'Hearing impairment',
    'speech': 'Speech disturbance',
    'vision': 'Vision disorder'
};

const age = {
    '0-1': 'From 0 to 1',
    '2-5': 'From 2 to 5',
    '6-10': 'From 6 to 10',
    '11-16': 'From 11 to 16',
    '17-30': 'From 17 to 30',
    '30+': 'From 30'
};

class SpecialistVisitCard extends PureComponent {

    componentDidMount() {
    }

    render() {
        return (
            <div className={`specialist-info-visit-elements-wrapper`}>
                <div className="exit-arrow-wrapper"  onClick={() => { this.props.displayDetails(); this.props.hide(null) } }>
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
                    <span className="specialist-info-visit-element-title">Diagnosis:</span>
                    <span>{this.props.data.categories.diagnosis.map(term => diagnosis[term]).join(', ')}</span>
                </div>
                <div className="specialist-info-visit-element inline-flex">
                    <div className="specialist-info-visit-element-recommended">
                        <span className="specialist-info-visit-element-title">Age:</span>
                        <span>{age[this.props.data.categories.age[0]]}</span>
                    </div>
                    <div className="specialist-info-visit-element-update">
                        <span></span>
                        <span onClick={this.props.displayDetails} className="specialist-info-details-button">More details</span>
                    </div>
                </div>
                <div className="specialist-info-visit-element">
                    <span></span>
                    <span className="regular-font-weight"><span className="people-recommended">{this.props.data.recommended} people</span><div className="people-recommendations-block"></div> can tell about {this.props.data.name}</span>
                </div>
                <div className="specialist-info-visit-element">
                    <div className="recommend-button">I'm ready to share my experience!</div>
                </div>
            </div>
        );
    }
}

export default SpecialistVisitCard;
