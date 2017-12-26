import React, { PureComponent } from 'react';
import * as  specialists from '../../metadata/specialists.json';
import './style.scss';

class SpecialistsBlock extends PureComponent {
    componentWillMount() {
        this.setState({ specialists: [] })
    }

    componentDidMount() {

        console.log(specialists.data);
        this.setState({
            specialists: specialists.data
        })
    }

    render() {
        return (
            <div className="specialist-info-list-elements-wrapper">
                {
                    this.state.specialists.map((specialist) => {
                        return (
                            <div className="specialist-info-list-element">
                                <div className="specialist-info-list-element-label">
                                    {specialist.name.length < 30 ? specialist.name : `${specialist.name.slice(0,30)}...`}
                                    </div>
                                <div className="specialist-info-list-element-label">
                                    Address: {specialist.address.length < 30 ? specialist.address : `${specialist.address.slice(0,30)}...`}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default SpecialistsBlock;