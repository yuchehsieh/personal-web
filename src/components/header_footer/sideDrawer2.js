import React from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import {
    iconFacebook,
    iconGithub,
    iconLinkedin
} from '../../Resources/svgIcons';

const SideDrawer = props => {
    return (
        <div
            className="side-drawer"
            style={{
                width: '100vw',
                height: '100vh',
                zIndex: props.show ? 999 : -1,
                opacity: props.show ? 1 : 0,
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '30px',
                background: 'rgba(0,0,0, .65)',
                color: 'whitesmoke',
                transition: 'all 0.5s'
            }}
        >
            <Fade center>
                <Link to="/works">
                    <p>Works</p>
                </Link>
                <Link to="/about">
                    <p>About</p>
                </Link>
                <a href="https://drive.google.com/file/d/1QX4_h8O0udvN2inwIeTIGpDhUtY-D25g/view?usp=sharing">
                    <p>Resume</p>
                </a>
            </Fade>
            <div
                className="icon-wrapper"
                style={{
                    position: 'absolute',
                    right: 20,
                    top: 35,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '27px',
                    justifyContent: 'space-between'
                }}
                onClick={() => props.handleDrawer(false)}
            >
                <div
                    className={`menu-bar ${props.show ? 'opening1' : 'closing1'}`}
                    style={{background: 'whitesmoke'}}
                />
                <div className="menu-bar" style={{display: 'none'}}/>
                <div
                    className={`menu-bar ${props.show ? 'opening2' : 'closing2'}`}
                    style={{
                        marginBottom: 3,
                        background: 'whitesmoke'
                    }}
                />
            </div>

            <div className="img-icon-wrapper">
                <a
                    className="img-icon"
                    href="https://www.facebook.com/profile.php?id=100002498776608"
                >
                    {iconFacebook()}
                </a>
                <a className="img-icon" href="https://github.com/yuchehsieh">
                    {iconGithub()}
                </a>
                <a
                    className="img-icon"
                    href="https://www.linkedin.com/in/%E8%82%B2%E5%93%B2-%E8%AC%9D-805109163/"
                >
                    {iconLinkedin()}
                </a>
            </div>
        </div>
    );
};

export default SideDrawer;
