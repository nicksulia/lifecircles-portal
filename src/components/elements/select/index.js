import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Select extends PureComponent {

    static propTypes = {
        barShown: PropTypes.bool.isRequired,
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
                <div className="filters-button" onClick={this.props.onHandleClick}>
                    <div className={this.props.barShown? 'select-minus-svg' :'select-plus-svg'}/>
                    <div className="select-button-text">Add filters</div>
                </div>
            </div>
        );
    }
}

export default Select;
