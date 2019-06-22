import React from 'react';

import {
  iconFacebook,
  iconGithub,
  iconLinkedin
} from '../../Resources/svgIcons';

const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
