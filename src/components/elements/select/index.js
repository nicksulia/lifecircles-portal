import React, { PureComponent } from 'react';
import './style.scss';

class Select extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isDisplayed: false,
        }
    }

    render() {
        return (
            <div className="select-wrapper">
                <div className="filters-button" onClick={() => {this.setState({isDisplayed:!this.state.isDisplayed})}}>
                    <div className="select-plus-svg"></div>
                    <div className="select-button-text">Add Filters</div>
                </div>
                {
                    this.state.isDisplayed &&
                    <div className="select-dropdown">
                        {
                            this.props.options.map((option) => {
                                return (
                                    <div>
                                        <span>[ ]</span><span key={option.value} onClick={() => {console.log(option.value)}}>{option.label}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Select;