import React, { PureComponent } from 'react';
//import * as  specialists from '../../metadata/specialists.json';
import './style.scss';

class SpecialistsBlock extends PureComponent {

    componentDidMount() {
    }

    render() {
        return (
            <div className="specialist-info-list-elements-wrapper">
                {
                    this.props.specialists ?
                    this.props.specialists.map((specialist) => {
                        return (
                            <div key={specialist.id} className="specialist-info-list-element">
                                <div className="specialist-info-list-element-label">
                                    <b>{specialist.name}</b>
                                    </div>
                                <div className="specialist-info-list-element-label">
                                    {specialist.address} <br/> {specialist.phone}
                                </div>
                                <div className="specialist-info-list-bottom-border"/>
                            </div>
                        )
                    }) : null
                }
            </div>
        );
    }
}

export default SpecialistsBlock;