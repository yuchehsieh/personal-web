import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import UiContext from '../contexts/uiContext';

class Header extends Component {
    static contextType = UiContext;

    render() {
        const currentPath = this.props.location.pathname.substr(1);

        // console.log(this.props);

        return (
            <UiContext.Consumer>
                {context => (
                    <header className={`${context.state.isLightBoxOpen ? 'hiding' : ''}`}>
                        <div className="header-container">
                            <div className="header_wrapper">
                                <div className="header_logo">
                                    <Link to="/">
                                        Murphy Hsieh
                                    </Link>
                                    <div className="color-bar"/>
                                </div>
                            </div>
                            <div className="web_nav_wrapper">
                                <Link to="/works">
                                    <p
                                        className={
                                            currentPath.startsWith('works') ? 'selected' : ''
                                        }
                                    >
                                        Works
                                    </p>
                                </Link>

                                <Link to="/about">
                                    <p className={currentPath === 'about' ? 'selected' : ''}>
                                        About
                                    </p>
                                </Link>

                                <a href="https://drive.google.com/file/d/1QX4_h8O0udvN2inwIeTIGpDhUtY-D25g/view?usp=sharing"
                                   target="_blank">
                                    <p className={currentPath === 'resume' ? 'selected' : ''}>
                                        Resume
                                    </p>
                                </a>
                            </div>

                            <div
                                className={`mobile_nav_wrapper ${
                                    this.props.drawerShowed ? 'disappear' : ''
                                }`}
                                onClick={() => this.props.handleDrawer(true)}
                            >
                                <div className="menu-bar"/>
                                <div className="menu-bar"/>
                                <div
                                    className="menu-bar"
                                    style={{
                                        marginBottom: 3
                                    }}
                                />
                            </div>
                        </div>
                    </header>
                )}
            </UiContext.Consumer>
        );
    }
}

export default withRouter(Header);
