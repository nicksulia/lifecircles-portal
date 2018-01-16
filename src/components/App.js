import React, { PureComponent } from 'react';
import Map from '../containers/map/Map.js';
import Search from '../containers/search/Search.js';
import './styles.scss';

class App extends PureComponent {
    render() {
        return (
            <div>
                <div className="block" id="block01"></div>
                <div className="block" id="block02">
                    <ul className="navigation">
                        <li><a href="#">Medical</a>
                            <ul>
                                <li><a href="#">Medical1</a></li>
                                <li><a href="#">Medical2</a></li>
                                <li><a href="#">Medical3</a></li>
                                <li><a href="#">Medical4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Education</a>
                            <ul>
                                <li><a href="#">Education1</a></li>
                                <li><a href="#">Education2</a></li>
                                <li><a href="#">Education2</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Socialization</a>
                            <ul>
                                <li><a href="#">Socialization1</a></li>
                                <li><a href="#">Socialization2</a></li>
                                <li><a href="#">Socialization3</a></li>
                                <li><a href="#">Socialization4</a></li>
                                <li><a href="#">Socialization5</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="block" id="block03"></div>
                <div className="block" id="map">
                    <div className = "section-header">ORGANIZATIONS AND SPECIALISTS</div>
                    <Search/>
                    <Map/>
                    <div className = "section-footer"><i className="heart-icon"/>Share your experience. <a href="#">Add an organization</a> you can recommend.</div>
                </div>
                <div className="block" id="events">
                    <h2>EVENTS</h2>
                    <div className="column-layout">
                        <div className="event-calendar">
                            <div className="event-calendar-header">
                                <div className="event-calendar-header-arrow event-calendar-header-arrow-l"></div>
                                <div className="event-calendar-header-inner">February 2018</div>
                                <div className="event-calendar-header-arrow event-calendar-header-arrow-r"></div>
                            </div>
                            <hr className="event-calendar-divider"/>
                                <div className="event-calendar-grid">
                                    <div className="event-calendar-day event-calendar-day-name">S</div>
                                    <div className="event-calendar-day event-calendar-day-name">M</div>
                                    <div className="event-calendar-day event-calendar-day-name">T</div>
                                    <div className="event-calendar-day event-calendar-day-name">W</div>
                                    <div className="event-calendar-day event-calendar-day-name">T</div>
                                    <div className="event-calendar-day event-calendar-day-name">F</div>
                                    <div className="event-calendar-day event-calendar-day-name">S</div>
                                    <div className="event-calendar-day">28</div>
                                    <div className="event-calendar-day">29</div>
                                    <div className="event-calendar-day">30</div>
                                    <div className="event-calendar-day">31</div>
                                    <div className="event-calendar-day">1</div>
                                    <div className="event-calendar-day">2</div>
                                    <div className="event-calendar-day">3</div>
                                    <div className="event-calendar-day">4</div>
                                    <div className="event-calendar-day">5</div>
                                    <div className="event-calendar-day">6</div>
                                    <div className="event-calendar-day">7</div>
                                    <div className="event-calendar-day">8</div>
                                    <div className="event-calendar-day">9</div>
                                    <div className="event-calendar-day">10</div>
                                    <div className="event-calendar-day">11</div>
                                    <div className="event-calendar-day">12</div>
                                    <div className="event-calendar-day">13</div>
                                    <div className="event-calendar-day">14</div>
                                    <div className="event-calendar-day">15</div>
                                    <div className="event-calendar-day">16</div>
                                    <div className="event-calendar-day">17</div>
                                    <div className="event-calendar-day">18</div>
                                    <div className="event-calendar-day">19</div>
                                    <div className="event-calendar-day">20</div>
                                    <div className="event-calendar-day event-calendar-sel event-calendar-sel-start">21</div>
                                    <div className="event-calendar-day event-calendar-sel">22</div>
                                    <div className="event-calendar-day event-calendar-sel event-calendar-sel-end">23</div>
                                    <div className="event-calendar-day">24</div>
                                    <div className="event-calendar-day">25</div>
                                    <div className="event-calendar-day">26</div>
                                    <div className="event-calendar-day">27</div>
                                    <div className="event-calendar-day">28</div>
                                    <div className="event-calendar-day">1</div>
                                    <div className="event-calendar-day">2</div>
                                    <div className="event-calendar-day">3</div>
                                </div>
                                <select className="event-city-selector">
                                    <option value="Kyiv">Kyiv</option>
                                </select>
                        </div>
                        <div className="event-list">
                            <div className="event-list-day">
                                <div className="event-list-day-header">Thursday, February 22</div>
                                <div className="event-list-item">
                                    <div className="event-list-item-date">
                                        <div className="event-list-item-date-inner">4:15 PM</div>
                                    </div>
                                    <div className="event-list-item-main">
                                        <div className="event-list-item-title">Individual program of development of the child with special needs</div>
                                        <div className="event-list-item-bottom-row">
                                            <div className="event-list-item-address">
                                                The Institute of leadership and management of ICU<br/>
                                                Kozelnytska 2a, Lviv, Ukraine, 79026
                                            </div>
                                            <div className="event-list-item-social">
                                                <div className="event-list-item-social-inner">
                                                    <a href="#">facebook event</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-list-item">
                                    <div className="event-list-item-date">
                                        <div className="event-list-item-date-inner">7:00 PM</div>
                                    </div>
                                    <div className="event-list-item-main">
                                        <div className="event-list-item-title">International Tutoring Congress</div>
                                        <div className="event-list-item-bottom-row">
                                            <div className="event-list-item-address">
                                                International Academy of Tutoring<br/>
                                                вул. А. Головка, 13/1, Київ, 03101
                                            </div>
                                            <div className="event-list-item-social">
                                                <div className="event-list-item-social-inner">
                                                    <a href="#">facebook event</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-list-item">
                                    <div className="event-list-item-date">
                                        <div className="event-list-item-date-inner">4:15 PM</div>
                                    </div>
                                    <div className="event-list-item-main">
                                        <div className="event-list-item-title">Individual program of development of the child with special needs</div>
                                        <div className="event-list-item-bottom-row">
                                            <div className="event-list-item-address">
                                                The Institute of leadership and management of ICU<br/>
                                                Kozelnytska 2a, Lviv, Ukraine, 79026
                                            </div>
                                            <div className="event-list-item-social">
                                                <div className="event-list-item-social-inner">
                                                    <a href="#">facebook event</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-list-item">
                                    <div className="event-list-item-date">
                                        <div className="event-list-item-date-inner">7:00 PM</div>
                                    </div>
                                    <div className="event-list-item-main">
                                        <div className="event-list-item-title">International Tutoring Congress</div>
                                        <div className="event-list-item-bottom-row">
                                            <div className="event-list-item-address">
                                                International Academy of Tutoring<br/>
                                                вул. А. Головка, 13/1, Київ, 03101
                                            </div>
                                            <div className="event-list-item-social">
                                                <div className="event-list-item-social-inner">
                                                    <a href="#">facebook event</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="event-list-day">
                                <div className="event-list-day-header">Friday, February 23</div>
                                <div className="event-list-item">
                                    <div className="event-list-item-date">
                                        <div className="event-list-item-date-inner">4:15 PM</div>
                                    </div>
                                    <div className="event-list-item-main">
                                        <div className="event-list-item-title">Individual program of development of the child with special needs</div>
                                        <div className="event-list-item-bottom-row">
                                            <div className="event-list-item-address">
                                                The Institute of leadership and management of ICU<br/>
                                                Kozelnytska 2a, Lviv, Ukraine, 79026
                                            </div>
                                            <div className="event-list-item-social">
                                                <div className="event-list-item-social-inner">
                                                    <a href="#">facebook event</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-list-item">
                                    <div className="event-list-item-date">
                                        <div className="event-list-item-date-inner">7:00 PM</div>
                                    </div>
                                    <div className="event-list-item-main">
                                        <div className="event-list-item-title">International Tutoring Congress</div>
                                        <div className="event-list-item-bottom-row">
                                            <div className="event-list-item-address">
                                                International Academy of Tutoring<br/>
                                                вул. А. Головка, 13/1, Київ, 03101
                                            </div>
                                            <div className="event-list-item-social">
                                                <div className="event-list-item-social-inner">
                                                    <a href="#">facebook event</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block" id="block06"></div>
            </div>
        );
    }
}

export default App;
