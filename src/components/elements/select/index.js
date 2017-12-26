import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Select extends PureComponent {

    static propTypes = {
        groups: PropTypes.object.isRequired,
        onHandleClick: PropTypes.func.isRequired
    };

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
                    <div className="select-plus-svg"/>
                    <div className="select-button-text">Add Filters</div>
                </div>
                {
                    this.state.isDisplayed &&
                    <div className="select-dropdown">
                        {
                            Object.keys(this.props.groups).map((group) => {
                                return (
                                    <div key = {group}>
                                        <div><b>{this.props.groups[group].label}</b></div>
                                        {
                                            this.props.groups[group].options.map((option, id) => {
                                                return (
                                                    <div key = {option.value} onClick={() => { this.props.onHandleClick(group, option.value, id) }}>
                                                        <span>[{option.checked ? "x" : " "}]</span><span>{option.label}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Select;