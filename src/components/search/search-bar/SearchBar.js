import React, { PureComponent } from 'react';

class SearchBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dropdownList: [
                'All regions',
                'Chernihiv',
                'Cherkasy',
                'Chernivtsi',
                'Dnipro',
                'Donetsk',
                'Ivano-Frankivsk',
                'Kharkiv',
                'Kherson',
                'Khmelnytskyi',
                'Kiev',
                'Kropyvnytskyi',
                'Luhansk',
                'Lviv',
                'Mykolaiv',
                'Odessa',
                'Poltava',
                'Rivne',
                'Sumy',
                'Ternopil',
                'Vinnytsia',
                'Lutsk',
                'Uzhhorod',
                'Zaporizhia'
            ],
            current: 'All regions',
            isShowed: false
        };
    }

    render() {
        return (
            <div className="search-bar-input-wrapper">
                <input type="text" className="search-bar-input" placeholder="Ex. Summer Camp"/>
                <div className="search-bar-dropdown-current" onClick={() => { this.setState({
                    ...this.state,
                    isShowed: true
                }) } }>Search {this.state.current}</div>
                {this.state.isShowed &&
                    <div className="search-bar-dropdown-list-wrapper">
                        {this.state.dropdownList.map((option) =>
                        {
                            return (
                                <div className="search-bar-dropdown-list-element" onClick={ () => { this.setState({
                                    ...this.state,
                                    isShowed: false,
                                    current: option
                                }) } }>{option}</div>
                            );
                        })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default SearchBar;