import React, { PureComponent } from 'react';
import './styles.scss';

class WikiComponent extends PureComponent {
    onWikiClick = () => {
        location.href = location.origin + '/wiki.html';
    };
    render() {
        return (
            <div className="wiki-categories-wrapper">
                <div className="wiki-categories-section">
                    <span>Medicine and physiology</span>
                    <div className="wiki-categories-section-elements-wrapper">
                        <div className="wiki-categories-section-container">
                            <div className = "wiki-categories-section-body">
                                <div className="wiki-categories-section-lists-wrapper">
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Diagnosis</li>
                                        <li onClick={this.onWikiClick}>Early Diagnosis</li>
                                        <li onClick={this.onWikiClick}>Tests</li>
                                        <li onClick={this.onWikiClick}>Dietary</li>
                                        <li onClick={this.onWikiClick}>Special nutrition</li>
                                    </ul>
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Sport Rehabilitation</li>
                                        <li onClick={this.onWikiClick}>Biomedical techniques</li>
                                        <li onClick={this.onWikiClick}>Therapeutic massage</li>
                                        <li onClick={this.onWikiClick}>Therapy</li>
                                        <li onClick={this.onWikiClick}>Tomatis therapy</li>
                                    </ul>
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Acupuncture</li>
                                        <li onClick={this.onWikiClick}>Hippotherapy</li>
                                        <li onClick={this.onWikiClick}>Kinesiology</li>
                                        <li onClick={this.onWikiClick}>Sensory Integration</li>
                                        <li onClick={this.onWikiClick}>Rehabilitation materials</li>
                                    </ul>
                                </div>
                                <div className="wiki-categories-section-search-block">
                                    <div className="wiki-categories-section-search">
                                        <div className="wiki-categories-section-search-icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="wiki-categories-section-footer">
                                <div className="wiki-categories-section-article-add">
                                    <span className="heart-icon"></span>
                                    <span className="section-footer-text-addition"><a href="#">Add your article</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wiki-categories-section">
                    <span>Education</span>
                    <div className="wiki-categories-section-elements-wrapper">
                        <div className="wiki-categories-section-container">
                            <div className = "wiki-categories-section-body">
                                <div className="wiki-categories-section-lists-wrapper">
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Habilitation</li>
                                        <li onClick={this.onWikiClick}>Self-service skills</li>
                                        <li onClick={this.onWikiClick}>Domestic skills</li>
                                        <li onClick={this.onWikiClick}>Alternative Communication</li>
                                        <li onClick={this.onWikiClick}>PECS</li>
                                    </ul>
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Sign language</li>
                                        <li onClick={this.onWikiClick}>Special Programs</li>
                                        <li onClick={this.onWikiClick}>ABA therapy</li>
                                        <li onClick={this.onWikiClick}>T.E.A.C.H.</li>
                                        <li onClick={this.onWikiClick}>Floortime therapy</li>
                                    </ul>
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Home Learning</li>
                                        <li onClick={this.onWikiClick}>Distance education</li>
                                        <li onClick={this.onWikiClick}>Inclusive education</li>
                                        <li onClick={this.onWikiClick}>Study materials</li>
                                    </ul>
                                </div>
                                <div className="wiki-categories-section-search-block">
                                    <div className="wiki-categories-section-search">
                                        <div className="wiki-categories-section-search-icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="wiki-categories-section-footer">
                                <div className="wiki-categories-section-article-add">
                                    <span className="heart-icon"></span>
                                    <span className="section-footer-text-addition"><a href="#">Add your article</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wiki-categories-section">
                    <span>Life</span>
                    <div className="wiki-categories-section-elements-wrapper">
                        <div className="wiki-categories-section-container">
                            <div className = "wiki-categories-section-body">
                                <div className="wiki-categories-section-lists-wrapper">
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Family Support</li>
                                        <li onClick={this.onWikiClick}>Parent Groups</li>
                                        <li onClick={this.onWikiClick}>Psychological support</li>
                                        <li onClick={this.onWikiClick}>Special Parenting</li>
                                        <li onClick={this.onWikiClick}>Master classes</li>

                                    </ul>
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>The Arts</li>
                                        <li onClick={this.onWikiClick}>Art therapy</li>
                                        <li onClick={this.onWikiClick}>Socialization</li>
                                        <li onClick={this.onWikiClick}>Group classes</li>
                                        <li onClick={this.onWikiClick}>Leisure</li>
                                    </ul>
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Summer Camps</li>
                                        <li onClick={this.onWikiClick}>Independence</li>
                                        <li onClick={this.onWikiClick}>Special Youth support</li>
                                        <li onClick={this.onWikiClick}>Special Adult support</li>

                                    </ul>
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Supported employment</li>
                                        <li onClick={this.onWikiClick}>Transit houses</li>
                                    </ul>
                                </div>
                                <div className="wiki-categories-section-search-block">
                                    <div className="wiki-categories-section-search">
                                        <div className="wiki-categories-section-search-icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="wiki-categories-section-footer">
                                <div className="wiki-categories-section-article-add">
                                    <span className="heart-icon"></span>
                                    <span className="section-footer-text-addition"><a href="#">Add your article</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wiki-categories-section">
                    <span>Legal aspects</span>
                    <div className="wiki-categories-section-elements-wrapper">
                        <div className="wiki-categories-section-container">
                            <div className = "wiki-categories-section-body">
                                <div className="wiki-categories-section-lists-wrapper">
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Public associations</li>
                                        <li onClick={this.onWikiClick}>Charitable funds</li>
                                        <li onClick={this.onWikiClick}>Social support</li>
                                        <li onClick={this.onWikiClick}>Legal advice</li>
                                        <li onClick={this.onWikiClick}>Invalidity</li>
                                    </ul>
                                </div>
                                <div className="wiki-categories-section-search-block">
                                    <div className="wiki-categories-section-search">
                                        <div className="wiki-categories-section-search-icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="wiki-categories-section-footer">
                                <div className="wiki-categories-section-article-add">
                                    <span className="heart-icon"></span>
                                    <span className="section-footer-text-addition"><a href="#">Add your article</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wiki-categories-section">
                    <span>Cooperation and Employment</span>
                    <div className="wiki-categories-section-elements-wrapper">
                        <div className="wiki-categories-section-container">
                            <div className = "wiki-categories-section-body">
                                <div className="wiki-categories-section-lists-wrapper">
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>How to select a specialist</li>
                                        <li onClick={this.onWikiClick}>How to select a center</li>
                                        <li onClick={this.onWikiClick}>Professional education</li>
                                        <li onClick={this.onWikiClick}>Enterprises for employment</li>
                                        <li onClick={this.onWikiClick}>Training tutors</li>
                                    </ul>
                                    <ul className="wiki-categories-section-list">
                                        <li onClick={this.onWikiClick}>Training of specialists</li>
                                        <li onClick={this.onWikiClick}>Certification</li>
                                        <li onClick={this.onWikiClick}>Volunteer projects</li>
                                        <li onClick={this.onWikiClick}>Social Projects</li>
                                    </ul>
                                </div>
                                <div className="wiki-categories-section-search-block">
                                    <div className="wiki-categories-section-search">
                                        <div className="wiki-categories-section-search-icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="wiki-categories-section-footer">
                                <div className="wiki-categories-section-article-add">
                                    <span className="heart-icon"></span>
                                    <span className="section-footer-text-addition"><a href="#">Add your article</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WikiComponent;
