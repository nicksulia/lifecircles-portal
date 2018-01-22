import React, { PureComponent } from 'react';
import VisitCard from './SpecialistVisitCard.js';
import './style.scss';

class SpecialistsBlock extends PureComponent {

    componentDidMount() {
    }

    render() {
        return (
            <div className={`specialist-info-list-elements-wrapper ${this.props.displayedSpecialist ? '' : 'specialist-list-setted'}`}>
                {
                    this.props.displayedSpecialist ? <VisitCard displayDetails = {this.props.displayDetails} data = {this.props.displayedSpecialist} hide = {this.props.hideSpecialist}/> :
                    (this.props.specialists ?
                        this.props.specialists.map((specialist) => {
                            return (
                                <div key={specialist.id} className="specialist-info-list-element" onClick={() => {this.props.displaySpecialist(specialist)} }>
                                    <div className="specialist-info-list-element-label">
                                        <b>{specialist.name}</b>
                                    </div>
                                    <div className="specialist-info-list-element-label">
                                        {specialist.address}
                                        <br/>
                                        {specialist.phone}
                                    </div>
                                    <div className="specialist-info-list-bottom-border"/>
                                </div>
                            )
                        }) : null)
                }
            </div>
        );
    }
}

export default SpecialistsBlock;
